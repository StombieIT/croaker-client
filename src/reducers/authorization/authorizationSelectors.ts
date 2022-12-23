import { RootState } from "../../store"
import { Nullable } from "../../types"
import { JwtToken } from "../../models/JwtToken"
import { createSelector } from "@reduxjs/toolkit"

export const selectAccessToken = (state: RootState): Nullable<JwtToken> => {
    return state.authorization.accessToken
}

export const selectRefreshToken = (state: RootState): Nullable<JwtToken> => {
    return state.authorization.refreshToken
}

export const selectIsAuthorizedToAccess: (state: RootState) => boolean = createSelector(
    [selectAccessToken],
    (accessToken: Nullable<JwtToken>): boolean => accessToken !== null
)

export const selectIsAuthorizedToRefresh: (state: RootState) => boolean = createSelector(
    [selectRefreshToken],
    (refreshToken: Nullable<JwtToken>): boolean => refreshToken !== null
)

export const selectIsAuthorized: (state: RootState) => boolean = createSelector(
    [selectRefreshToken, selectAccessToken],
    (refreshToken: Nullable<JwtToken>, accessToken: Nullable<JwtToken>): boolean => accessToken !== null && refreshToken !== null
)