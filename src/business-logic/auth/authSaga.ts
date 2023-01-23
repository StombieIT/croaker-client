import { call, takeLatest, put } from "@redux-saga/core/effects"
import { PayloadAction } from "@reduxjs/toolkit"
import { ILoginContainer } from "../../models/ILoginContainer"
import { sendLogin, setUser, tearDown } from "./authSlice"
import { IRefresher } from "../../models/IRefresher"
import { LocalStorageKey } from "../../models/LocalStorageKey"
import { IUser } from "../../models/IUser"
import * as authApi from "../../api/authApi"
import * as usersApi from "../../api/usersApi"

export function *authWatcher() {
    yield takeLatest(sendLogin.type, authWorker)
}

export function *authWorker(action: PayloadAction<ILoginContainer>) {
    const refresher: IRefresher = yield call(authApi.login, action.payload)
    localStorage.setItem(LocalStorageKey.ACCESS_TOKEN, refresher.accessToken)
    localStorage.setItem(LocalStorageKey.REFRESH_TOKEN, refresher.refreshToken)
    const user: IUser = yield call(usersApi.getUserByAuth)
    yield put(setUser(user))
}