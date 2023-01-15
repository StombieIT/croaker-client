import { takeEvery, StrictEffect } from "@redux-saga/core/effects"
import { fetchProfile } from "./profileSlice"

export function *profileWatcher(): Generator<StrictEffect> {
    yield takeEvery(fetchProfile.type, profileWorker)
}

export function *profileWorker(): Generator<StrictEffect> {
}