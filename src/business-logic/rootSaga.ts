import { spawn } from "@redux-saga/core/effects"
import { croaksWatcher } from "./croaks/croaksSaga"

export function *rootSaga() {
    yield spawn(croaksWatcher)
}