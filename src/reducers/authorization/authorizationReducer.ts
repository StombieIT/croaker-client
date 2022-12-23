import { AnyAction } from "@reduxjs/toolkit"
import { Nullable } from "../../types"
import { JwtToken } from "../../models/JwtToken"

enum ActionType {
    SET_AUTHORIZATION_TOKEN = "SET_AUTHORIZATION_TOKEN"
}

export interface IAuthorizationState {
    isLoading: boolean,
    refreshToken: Nullable<JwtToken>,
    accessToken: Nullable<JwtToken>
}

const initialState: IAuthorizationState = {
    isLoading: true,
    accessToken: null,
    refreshToken: null
}

export const authorizationReducer = (state: IAuthorizationState = initialState, action: AnyAction): IAuthorizationState => {
    switch (action.type) {
        case ActionType.SET_AUTHORIZATION_TOKEN:
            return {
                ...state,
                ...action.payload
            }
    }
    return state
}

interface ISetAuthorizationTokenAction {
    type: ActionType.SET_AUTHORIZATION_TOKEN,
    payload: IAuthorizationState
}

export const setAuthorizationToken = (authorizationToken: IAuthorizationState): ISetAuthorizationTokenAction => ({
    type: ActionType.SET_AUTHORIZATION_TOKEN,
    payload: authorizationToken
})
