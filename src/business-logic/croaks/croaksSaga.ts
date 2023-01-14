import { takeEvery, call, put } from "@redux-saga/core/effects"
import { fetchCroaks } from "./croaksSlice"

export function *croaksWatcher() {
    yield takeEvery(fetchCroaks.type, croaksWorker)
}

export function *croaksWorker() {
    yield call(console.log, "called")
}