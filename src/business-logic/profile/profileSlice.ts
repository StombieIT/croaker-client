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
        },

        tearDown(state): IProfileState {
            return initialState
        }
    }
})

export const profileReducer = profileSlice.reducer

export const { setIsLoading, setProfile, tearDown } = profileSlice.actions

export const fetchProfileById = createAction<number>(`${profileSlice.name}/fetchProfileById`)