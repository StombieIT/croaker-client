import { takeEvery, call, put, StrictEffect } from "@redux-saga/core/effects"
import { fetchCroaks } from "./croaksSlice"

export function *croaksWatcher(): Generator<StrictEffect> {
    yield takeEvery(fetchCroaks.type, croaksWorker)
}

export function *croaksWorker(): Generator<StrictEffect> {
    yield call(console.log, "called")
}