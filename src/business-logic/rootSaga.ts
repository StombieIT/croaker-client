import { spawn, StrictEffect } from "@redux-saga/core/effects"
import { authWatcher } from "./auth/authSaga"
import { croaksWatcher } from "./croaks/croaksSaga"
import { profileWatcher } from "./profile/profileSaga"

export function *rootSaga(): Generator<StrictEffect> {
    yield spawn(profileWatcher)
    yield spawn(croaksWatcher)
    yield spawn(authWatcher)
}