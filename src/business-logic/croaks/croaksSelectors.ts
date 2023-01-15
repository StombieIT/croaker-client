import { RootState } from "../../store"
import { ICroaksState } from "./croaksSlice"

export const selectCroaksState = (state: RootState): ICroaksState => state.croaks