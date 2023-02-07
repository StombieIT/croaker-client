import { select, call, put, takeLatest, takeLeading } from "@redux-saga/core/effects"
import { PayloadAction } from "@reduxjs/toolkit"
import { IPaginator } from "../../models/IPaginator"
import { fromDto, ICroak } from "../../models/ICroak"
import { ICroakDto } from "../../models/ICroakDto"
import { NotificationType } from "../../models/NotificationType"
import { appendNotificationContainer } from "../notifications/notificationsSlice"
import { selectCroakLikesIsActiveById, selectCroaksPaginator } from "./croaksSelectors"
import {
    fetchNextCroaksByUserId, fetchNextRepliesByUserId,
    fetchNextLikesByUserId, fetchOriginalCroakById,
    mergePaginator, setIsLoading, garbleOriginalCroak,
    toggleLikesIsActiveByCroakId, setLikesIsLoadingByCroakId,
    setLikesByCroakId
} from "./croaksSlice"
import { GetPaginatorApiMethod } from "../../models/GetPaginatorApiMethod"
import { IIdentifiable } from "../../models/IIdentifiable"
import * as croaksApi from "../../api/croaksApi"
import { IReactionDto } from "../../models/IReactionDto"

export function *croaksWatcher() {
    yield takeLatest(fetchNextCroaksByUserId.type, fetchNextCroaksByUserIdWorker)
    yield takeLatest(fetchNextRepliesByUserId.type, fetchNextRepliesByUserIdWorker)
    yield takeLatest(fetchNextLikesByUserId.type, fetchNextLikesByUserIdWorker)
    yield takeLeading(fetchOriginalCroakById.type, fetchOriginalCroakByIdWorker)
    yield takeLeading(toggleLikesIsActiveByCroakId.type, toggleLikesIsActiveByCroakIdWorker)
}

export function *fetchNextByIdWorker(action: PayloadAction<number>, getByUserId: GetPaginatorApiMethod<ICroakDto, IIdentifiable>) {
    yield put(setIsLoading(true))
    try {
        const croaksPaginator: IPaginator<ICroak> | undefined = yield select(selectCroaksPaginator)
        const nextPage: number = croaksPaginator ? croaksPaginator.page + 1 : 1
        const nextCroaksPaginator: IPaginator<ICroakDto> = yield call(getByUserId, {id: action.payload, page: nextPage})
        yield put(mergePaginator({...nextCroaksPaginator, items: nextCroaksPaginator.items.map(fromDto)}))
        yield put(setIsLoading(false))
    } catch (err) {
        yield put(appendNotificationContainer({type: NotificationType.ERROR, text: "Unable to load croaks ;("}))
    }
}

export function *fetchNextCroaksByUserIdWorker(action: PayloadAction<number>) {
    yield call(fetchNextByIdWorker, action, croaksApi.getCroaksByUserId)
}

export function *fetchNextRepliesByUserIdWorker(action: PayloadAction<number>) {
    yield call(fetchNextByIdWorker, action, croaksApi.getRepliesByUserId)
}

export function *fetchNextLikesByUserIdWorker(action: PayloadAction<number>) {
    yield call(fetchNextByIdWorker, action, croaksApi.getLikesByUserId)
}

export function *fetchOriginalCroakByIdWorker(action: PayloadAction<number>) {
    try {
        const croak: ICroakDto = yield call(croaksApi.getCroakById, action.payload)
        yield put(garbleOriginalCroak(fromDto(croak)))
    } catch (err) {
        yield put(appendNotificationContainer({type: NotificationType.ERROR, text: "Unable to load original croak ;("}))    
    }
}

export function *toggleLikesIsActiveByCroakIdWorker(action: PayloadAction<number>) {
    const croakLikesIsActive: boolean | undefined = yield select(selectCroakLikesIsActiveById(action.payload))
    if (croakLikesIsActive !== undefined) {
        yield put(setLikesIsLoadingByCroakId({id: action.payload, isLoading: true}))
        try {
            let reaction: IReactionDto
            if (croakLikesIsActive) {
                reaction = yield call(croaksApi.removeLikeByCroakId, action.payload)
            } else {
                reaction = yield call(croaksApi.addLikeByCroakId, action.payload)
            }
            yield put(setLikesByCroakId({id: action.payload, likes: reaction}))
        } catch (err) {
            yield put(appendNotificationContainer({
                type: NotificationType.ERROR,
                text: `Unable to ${croakLikesIsActive ? "un" : ""}like`
            }))
        } finally {
            yield put(setLikesIsLoadingByCroakId({id: action.payload, isLoading: false}))
        }
    }
}
