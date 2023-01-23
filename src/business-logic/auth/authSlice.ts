import { createAction, createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { ILoginContainer } from "../../models/ILoginContainer"
import { IUser } from "../../models/IUser"

export interface IAuthState {
    user?: IUser
}

const initialState: IAuthState = {}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>): void {
            state.user = action.payload
        },

        tearDown(state): IAuthState {
            return initialState
        }
    }
})

export const authReducer = authSlice.reducer

export const { setUser, tearDown } = authSlice.actions

export const sendLogin = createAction<ILoginContainer>(`${authSlice.name}/sendLogin`)