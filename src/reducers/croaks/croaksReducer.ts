import { AnyAction } from "@reduxjs/toolkit"
import { ICroak } from "../../models/ICroak"
import { PayloadActionCreator } from "../../models/PayloadActionCreator"

enum CroaksReducerActionType {
    APPEND_CROAK = "CROAKS_APPEND_CROAK",
    APPEND_CROAKS = "CROAKS_APPEND_CROAKS",
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
    switch (action.type) {
        case CroaksReducerActionType.APPEND_CROAK:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ]
            }
        case CroaksReducerActionType.APPEND_CROAKS:
            return {
                ...state,
                list: [
                    ...state.list,
                    ...action.payload
                ]
            }
        case CroaksReducerActionType.TOGGLE_LIKES_IS_ACTIVE:
            return {
                ...state,
                list: state.list.map(croak => croak.id === action.payload ? {...croak, likes: {...croak.likes, isActive: !croak.likes.isActive}} : croak)
            }
        case CroaksReducerActionType.TOGGLE_COMMENTS_IS_ACTIVE:
            return {
                ...state,
                list: state.list.map(croak => croak.id === action.payload ? {...croak, comments: {...croak.comments, isActive: !croak.comments.isActive}} : croak)
            }
        case CroaksReducerActionType.TOGGLE_RECROAKS_IS_ACTIVE:
            return {
                ...state,
                list: state.list.map(croak => croak.id === action.payload ? {...croak, recroaks: {...croak.recroaks, isActive: !croak.recroaks.isActive}} : croak)
            }
    }
    return state
}

export const createAppendCroakAction: PayloadActionCreator<CroaksReducerActionType.APPEND_CROAK, ICroak> = croak => ({
    type: CroaksReducerActionType.APPEND_CROAK,
    payload: croak
})

export const createAppendCroaksAction: PayloadActionCreator<CroaksReducerActionType.APPEND_CROAKS, Array<ICroak>> = croaks => ({
    type: CroaksReducerActionType.APPEND_CROAKS,
    payload: croaks
})

export const createToggleLikesIsActiveAction: PayloadActionCreator<CroaksReducerActionType.TOGGLE_LIKES_IS_ACTIVE, number> = id => ({
    type: CroaksReducerActionType.TOGGLE_LIKES_IS_ACTIVE,
    payload: id
})

export const createToggleCommentsIsActiveAction: PayloadActionCreator<CroaksReducerActionType.TOGGLE_COMMENTS_IS_ACTIVE, number> = id => ({
    type: CroaksReducerActionType.TOGGLE_COMMENTS_IS_ACTIVE,
    payload: id
})

export const createToggleRecroaksIsActiveAction: PayloadActionCreator<CroaksReducerActionType.TOGGLE_RECROAKS_IS_ACTIVE, number> = id => ({
    type: CroaksReducerActionType.TOGGLE_RECROAKS_IS_ACTIVE,
    payload: id
})