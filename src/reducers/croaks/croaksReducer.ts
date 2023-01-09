import { AnyAction } from "@reduxjs/toolkit"
import { ICroak } from "../../models/ICroak"

enum CroaksReducerActionType {
    APPEND_CROAK = "CROAKS_APPEND_CROAK",
    TOGGLE_LIKES_IS_ACTIVE = "CROAKS_TOGGLE_LIKES_IS_ACTIVE",
    TOGGLE_COMMENTS_IS_ACTIVE = "CROAKS_TOGGLE_COMMENTS_IS_ACTIVE",
    TOGGLE_RECROAKS_IS_ACTIVE = "CROAKS_TOGGLE_RECROAKS_IS_ACTIVE",
    INCREMENT_LIKES_COUNT = "CROAKS_INCREMENT_LIKES_COUNT",
    INCREMENT_COMMENTS_COUNT = "CROAKS_INCREMENT_COMMENTS_COUNT",
    INCREMENT_RECROAKS_COUNT = "CROAKS_INCREMENT_RECROAKS_COUNT",
    DECREMENT_LIKES_COUNT = "CROAKS_DECREMENT_LIKES_COUNT",
    DECREMENT_COMMENTS_COUNT = "CROAKS_DECREMENT_COMMENTS_COUNT",
    DECREMENT_RECROAKS_COUNT = "CROAKS_DECREMENT_RECROAKS_COUNT"
}

export interface ICroaksState {
    list: Array<ICroak>
}

const initialState: ICroaksState = {
    list: []
}

export const croaksReducer = (state: ICroaksState = initialState, action: AnyAction): ICroaksState => {
    return state
}