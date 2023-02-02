import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ILoadable } from "../../models/ILoadable"
import { IProfile } from "../../models/IProfile"

export interface IProfileState extends ILoadable {
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

        setFollowIsActive(state, action: PayloadAction<boolean>): void {
            if (state.profile) {
                state.profile.follow.isActive = action.payload
            }
        },

        setFollowIsLoading(state, action: PayloadAction<boolean>): void {
            if (state.profile) {
                state.profile.follow.isLoading = action.payload
            }
        },

        tearDown(state): IProfileState {
            return initialState
        }
    }
})

export const profileReducer = profileSlice.reducer

export const {
    setIsLoading, setProfile, tearDown,
    setFollowIsActive, setFollowIsLoading
} = profileSlice.actions

export const fetchFullProfileById = createAction<number>(`${profileSlice.name}/fetchProfileById`)
export const toggleProfileFollowIsActive = createAction(`${profileSlice.name}/toggleProfileFollowIsActive`)