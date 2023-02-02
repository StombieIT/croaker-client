import { IActivable } from "../../models/IActivable"
import { ILoadable } from "../../models/ILoadable"
import { IUser } from "../../models/IUser"
import { RootState } from "../../store"
import { IProfileState } from "./profileSlice"

export const selectProfileState = (state: RootState): IProfileState => state.profile

export const selectProfileUser = (state: RootState): IUser | undefined => state.profile.profile?.user

export const selectProfileFollow = (state: RootState): ILoadable & IActivable | undefined => state.profile.profile?.follow