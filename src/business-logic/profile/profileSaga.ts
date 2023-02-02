import {
    StrictEffect, takeEvery,
    call, put, all, select
} from "@redux-saga/core/effects"
import { PayloadAction } from "@reduxjs/toolkit"
import { IProfileDto } from "../../models/IProfileDto"
import { NotificationType } from "../../models/NotificationType"
import { appendNotificationContainer } from "../notifications/notificationsSlice"
import {
    fetchFullProfileById, setIsLoading, setProfile,
    toggleProfileFollowIsActive, setFollowIsLoading, setFollowIsActive
} from "./profileSlice"
import { ServerError } from "../../models/ServerError"
import { IUser } from "../../models/IUser"
import { selectProfileFollow, selectProfileUser } from "./profileSelectors"
import * as profilesApi from "../../api/profilesApi"
import * as usersApi from "../../api/usersApi"
import { IActivable } from "../../models/IActivable"
import { ILoadable } from "../../models/ILoadable"

export function *profileWatcher(): Generator<StrictEffect> {
    yield takeEvery(fetchFullProfileById.type, fetchFullProfileByIdWorker)
    yield takeEvery(toggleProfileFollowIsActive.type, toggleProfileFollowIsActiveWorker)
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
        if (err instanceof ServerError) {
            yield put(appendNotificationContainer({type: NotificationType.ERROR, text: err.message}))
        }
    }
}

export function *toggleProfileFollowIsActiveWorker() {
    const user: IUser | undefined = yield select(selectProfileUser)
    const follow: IActivable & ILoadable | undefined = yield select(selectProfileFollow)
    if (user && follow) {
        yield put(setFollowIsLoading(true))
        try {
            let updatedFollowIsActive: boolean
            if (follow.isActive) {
                updatedFollowIsActive = yield call(usersApi.unfollowToUserWithId, user.id)
            } else {
                updatedFollowIsActive = yield call(usersApi.followToUserWithId, user.id)
            }
            yield put(setFollowIsActive(updatedFollowIsActive))
        } catch (err) {
            yield put(appendNotificationContainer({
                type: NotificationType.ERROR,
                text: `Unable to ${follow.isActive ? "un" : ""}follow ;(`
            }))
        } finally {
            yield put(setFollowIsLoading(false))
        }
    }
}

export function *fetchProfileByIdWorker(id: number) {
    try {
        const profile: IProfileDto = yield call(profilesApi.getProfileById, id)
        return profile
    } catch (err) {
        throw new ServerError("Unable to get follow info ;(")
    }
}

export function *fetchProfileFollowIsActiveByIdWorker(id: number) {
    try {
        const followIsActive: boolean = yield call(usersApi.isFollowedToUserWithId, id)
        return followIsActive
    } catch (err) {
        throw new ServerError("Unable to get follow info ;(")
    }
}
