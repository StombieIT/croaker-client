import { createAction, createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { ILoginContainer } from "../../models/ILoginContainer"
import { IUser } from "../../models/IUser"

export interface IAuthState {
    isLoading: boolean,
    user?: IUser
}

const initialState: IAuthState = {
    isLoading: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsLoading(state, action: PayloadAction<boolean>): void {
            state.isLoading = action.payload
        },

        setUser(state, action: PayloadAction<IUser>): void {
            state.user = action.payload
        },

        tearDown(state): IAuthState {
            return initialState
        }
    }
})

export const authReducer = authSlice.reducer

export const { setIsLoading , setUser, tearDown } = authSlice.actions

export const sendLogin = createAction<ILoginContainer>(`${authSlice.name}/sendLogin`)
export const fetchUserByAuth = createAction(`${authSlice.name}/fetchUserByAuth`)