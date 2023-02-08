import { createSelector } from "@reduxjs/toolkit"
import { IActivable } from "../../models/IActivable"
import { ILoadable } from "../../models/ILoadable"
import { IUser } from "../../models/IUser"
import { RootState } from "../../store"
import { IProfileState } from "./profileSlice"

export const selectProfileState = (state: RootState): IProfileState => state.profile

export const selectProfile = createSelector(selectProfileState, state => state.profile)

export const selectProfileUser = (state: RootState): IUser | undefined => state.profile.profile?.user

export const selectProfileFollow = (state: RootState): ILoadable & IActivable | undefined => state.profile.profile?.follow

export const selectProfileFollows = createSelector(selectProfile, profile => {
    if (profile) {
        return {
            followersCount: profile.followersCount,
            followingCount: profile.followingCount
        }
    }
})

export const selectProfileHeader = createSelector(selectProfile, profile => {
    if (profile) {
        return {
            name: profile.user.name,
            croaksCount: profile.croaksCount
        }
    }
})

export const selectProfileMeta = createSelector(selectProfile, profile => {
    if (profile) {
        return {
            userId: profile.user.id,
            city: profile.city,
            country: profile.country,
            registrationDate: profile.user.registrationDate
        }
    }
})

export const selectProfileDescription = createSelector(selectProfile, profile => {
    if (profile) {
        return {
            description: profile.description
        }
    }
})

export const selectProfileUsername = createSelector(selectProfile, profile => {
    if (profile) {
        return {
            username: profile.user.username
        }
    }
})
