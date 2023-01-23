import { select, call, put, takeEvery } from "@redux-saga/core/effects"
import { PayloadAction } from "@reduxjs/toolkit"
import { getCroaksByUserId } from "../../api/croaksApi"
import { ICroak } from "../../models/ICroak"
import { IPaginator } from "../../models/IPaginator"
import { NotificationType } from "../../models/NotificationType"
import { appendNotificationContainer } from "../notifications/notificationsSlice"
import { selectCroaksPaginator } from "./croaksSelectors"
import { fetchNextCroaksByUserId, mergePaginator, setIsLoading } from "./croaksSlice"

export function *croaksWatcher() {
    yield takeEvery(fetchNextCroaksByUserId.type, croaksWorker)
}

export function *croaksWorker(action: PayloadAction<number>) {
    yield put(setIsLoading(true))
    try {
        const croaksPaginator: IPaginator<ICroak> | undefined = yield select(selectCroaksPaginator)
        const nextPage: number = croaksPaginator ? croaksPaginator.page + 1 : 1
        const nextCroaksPaginator: IPaginator<ICroak> = yield call(getCroaksByUserId, action.payload, nextPage)
        yield put(mergePaginator(nextCroaksPaginator))
        yield put(setIsLoading(false))
    } catch (err) {
        yield put(appendNotificationContainer({type: NotificationType.ERROR, text: "Unable to load croaks ;("}))
    }
}