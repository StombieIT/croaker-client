import { takeEvery, call, put, StrictEffect } from "@redux-saga/core/effects"
import { PayloadAction } from "@reduxjs/toolkit"
import { getCroaksByUserId } from "../../api/croaksApi"
import { ICroak } from "../../models/ICroak"
import { IPaginator } from "../../models/IPaginator"
import { fetchCroaks, mergePaginator } from "./croaksSlice"

export function *croaksWatcher(): Generator<StrictEffect> {
    yield takeEvery(fetchCroaks.type, croaksWorker)
}

export function *croaksWorker(action: PayloadAction<number>): Generator<StrictEffect, void, IPaginator<ICroak>> {
    const croaksPaginator: IPaginator<ICroak> = yield call(getCroaksByUserId, action.payload)

    yield put(mergePaginator(croaksPaginator))
}