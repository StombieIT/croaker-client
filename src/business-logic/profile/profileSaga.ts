import { StrictEffect, takeLatest, call, put, all } from "@redux-saga/core/effects"
import { PayloadAction } from "@reduxjs/toolkit"
import { IProfileDto } from "../../models/IProfileDto"
import { NotificationType } from "../../models/NotificationType"
import { appendNotificationContainer } from "../notifications/notificationsSlice"
import { fetchFullProfileById, setIsLoading, setProfile } from "./profileSlice"
import { FetchError } from "../../models/FetchError"
import * as profilesApi from "../../api/profilesApi"
import * as usersApi from "../../api/usersApi"

export function *profileWatcher(): Generator<StrictEffect> {
    yield takeLatest(fetchFullProfileById.type, fetchFullProfileByIdWorker)
}

export function *fetchFullProfileByIdWorker(action: PayloadAction<number>) {
    yield put(setIsLoading(true))
    try {
        const [profile, followIsActive]: [IProfileDto, boolean] = yield all([
            call(fetchProfileByIdWorker, action.payload),
            call(fetchProfileFollowIsActiveByIdWorker, action.payload)
        ])
        yield put(setProfile({...profile, follow: {isLoading: false, isActive: followIsActive}}))
        yield put(setIsLoading(false))
    } catch (err) {
        if (err instanceof FetchError) {
            yield put(appendNotificationContainer({type: NotificationType.ERROR, text: err.message}))
        }
    }
}

export function *fetchProfileByIdWorker(id: number) {
    try {
        const profile: IProfileDto = yield call(profilesApi.getProfileById, id)
        return profile
    } catch (err) {
        throw new FetchError("Unable to get follow info ;(")
    }
}

export function *fetchProfileFollowIsActiveByIdWorker(id: number) {
    try {
        const followIsActive: boolean = yield call(usersApi.isFollowedToUserWithId, id)
        return followIsActive
    } catch (err) {
        throw new FetchError("Unable to get follow info ;(")
    }
}