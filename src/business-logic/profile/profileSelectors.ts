import { RootState } from "../../store"
import { IProfileState } from "./profileSlice"

export const selectProfileState = (state: RootState): IProfileState => state.profile