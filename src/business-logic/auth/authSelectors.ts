import { RootState } from "../../store"
import { IAuthState } from "./authSlice"

export const selectAuthState = (state: RootState): IAuthState => state.auth

export const selectIsUnauthorized = (state: RootState): boolean => !state.auth.isLoading && !state.auth.user

export const selectIsAuthorized = (state: RootState): boolean => !state.auth.isLoading && !!state.auth.user

export const selectAuthUserId = (state: RootState): number | undefined => state.auth.user?.id