import { takeEvery, call, all, put, StrictEffect } from "@redux-saga/core/effects"
import { PayloadAction } from "@reduxjs/toolkit"
import { getProfileById } from "../../api/profilesApi"
import { IProfile } from "../../models/IProfile"
import { NotificationType } from "../../models/NotificationType"
import { appendNotificationContainer } from "../notifications/notificationsSlice"
import { fetchProfileById, setIsLoading, setProfile } from "./profileSlice"

export function *profileWatcher(): Generator<StrictEffect> {
    yield takeEvery(fetchProfileById.type, profileWorker)
}

export function *profileWorker(action: PayloadAction<number>) {
    yield put(setIsLoading(true))
    try {
        const profile: IProfile = yield call(getProfileById, action.payload)
        yield put(setProfile(profile))
        yield put(setIsLoading(false))
    } catch (err) {
        yield put(appendNotificationContainer({type: NotificationType.ERROR, text: "Unable to load profile"}))
    }
}