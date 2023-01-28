import { select, call, put, takeLatest, takeLeading } from "@redux-saga/core/effects"
import { PayloadAction } from "@reduxjs/toolkit"
import { IPaginator } from "../../models/IPaginator"
import { fromDto, ICroak } from "../../models/ICroak"
import { ICroakDto } from "../../models/ICroakDto"
import { NotificationType } from "../../models/NotificationType"
import { appendNotificationContainer } from "../notifications/notificationsSlice"
import { selectCroaksPaginator } from "./croaksSelectors"
import {
    fetchNextCroaksByUserId, fetchOriginalCroakById,
    mergePaginator, setIsLoading, garbleOriginalCroak
} from "./croaksSlice"
import * as croaksApi from "../../api/croaksApi"

export function *croaksWatcher() {
    yield takeLatest(fetchNextCroaksByUserId.type, fetchNextCroaksByUserIdWorker)
    yield takeLeading(fetchOriginalCroakById.type, fetchOriginalCroakByIdWorker)
}

export function *fetchNextCroaksByUserIdWorker(action: PayloadAction<number>) {
    yield put(setIsLoading(true))
    try {
        const croaksPaginator: IPaginator<ICroak> | undefined = yield select(selectCroaksPaginator)
        const nextPage: number = croaksPaginator ? croaksPaginator.page + 1 : 1
        const nextCroaksPaginator: IPaginator<ICroakDto> = yield call(croaksApi.getCroaksByUserId, action.payload, nextPage)
        yield put(mergePaginator({...nextCroaksPaginator, items: nextCroaksPaginator.items.map(fromDto)}))
        yield put(setIsLoading(false))
    } catch (err) {
        yield put(appendNotificationContainer({type: NotificationType.ERROR, text: "Unable to load croaks ;("}))
    }
}

export function *fetchOriginalCroakByIdWorker(action: PayloadAction<number>) {
    try {
        const croak: ICroakDto = yield call(croaksApi.getCroakById, action.payload)
        yield put(garbleOriginalCroak(fromDto(croak)))
    } catch (err) {
        yield put(appendNotificationContainer({type: NotificationType.ERROR, text: "Unable to load original croak ;("}))    
    }
}
