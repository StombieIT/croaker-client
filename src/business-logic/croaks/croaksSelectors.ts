import { RootState } from "../../store"
import { ICroaksState } from "./croaksSlice"

export const selectCroaks = (state: RootState): ICroaksState => state.croaks