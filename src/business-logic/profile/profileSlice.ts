import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProfile } from "../../models/IProfile"

export interface IProfileState {
    isLoading: boolean,
    profile?: IProfile
}

const initialState: IProfileState = {
    isLoading: true
}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setIsLoading(state, action: PayloadAction<boolean>): void {
            state.isLoading = action.payload
        },

        setProfile(state, action: PayloadAction<IProfile>): void {
            state.profile = action.payload
        }
    }
})

export const profileReducer = profileSlice.reducer

export const { setIsLoading, setProfile } = profileSlice.actions

export const fetchProfile = createAction(`${profileSlice.name}/fetchProfile`)