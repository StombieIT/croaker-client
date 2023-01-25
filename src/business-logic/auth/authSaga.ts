import { call, takeLatest, takeEvery, put } from "@redux-saga/core/effects"
import { PayloadAction } from "@reduxjs/toolkit"
import { ILoginContainer } from "../../models/ILoginContainer"
import { fetchUserByAuth, sendLogin, setIsLoading, setUser, tearDown } from "./authSlice"
import { IRefresher } from "../../models/IRefresher"
import { LocalStorageKey } from "../../models/LocalStorageKey"
import { IUser } from "../../models/IUser"
import { appendNotificationContainer } from "../notifications/notificationsSlice"
import { NotificationType } from "../../models/NotificationType"
import * as usersApi from "../../api/usersApi"
import * as authApi from "../../api/authApi"

export function *authWatcher() {
    yield takeLatest(sendLogin.type, sendLoginWorker)
    yield takeEvery(fetchUserByAuth.type, fetchUserByAuthWorker)
}

export function *sendLoginWorker(action: PayloadAction<ILoginContainer>) {
    try {
        const refresher: IRefresher = yield call(authApi.login, action.payload)
        localStorage.setItem(LocalStorageKey.ACCESS_TOKEN, refresher.accessToken)
        localStorage.setItem(LocalStorageKey.REFRESH_TOKEN, refresher.refreshToken)
        const user: IUser = yield call(usersApi.getUserByAuth)
        yield put(setUser(user))
        yield put(appendNotificationContainer({type: NotificationType.SUCCESS, text: "You have logged in successfully"}))
    } catch (err) {
        yield put(appendNotificationContainer({type: NotificationType.ERROR, text: "Incorrect login or password"}))
    }
}

export function *fetchUserByAuthWorker() {
    yield put(setIsLoading(true))
    try {
        const user: IUser = yield call(usersApi.getUserByAuth)
        yield put(setUser(user))
    } catch (err) {
        yield put(appendNotificationContainer({type: NotificationType.ERROR, text: "Unable to authenticate ;("}))
        yield put(appendNotificationContainer({type: NotificationType.INFO, text: "Log in to access the page"}))
    } finally {
        yield put(setIsLoading(false))
    }
}