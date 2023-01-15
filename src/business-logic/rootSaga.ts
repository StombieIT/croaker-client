import { spawn, StrictEffect } from "@redux-saga/core/effects"
import { croaksWatcher } from "./croaks/croaksSaga"
import { profileWatcher } from "./profile/profileSaga"

export function *rootSaga(): Generator<StrictEffect> {
    yield spawn(croaksWatcher)
    yield spawn(profileWatcher)
}