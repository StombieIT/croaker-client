import { ICroak } from "../../models/ICroak"
import { IPaginator } from "../../models/IPaginator"
import { RootState } from "../../store"
import { ICroaksState } from "./croaksSlice"

export const selectCroaksState = (state: RootState): ICroaksState => state.croaks

export const selectCroaksPaginator = (state: RootState): IPaginator<ICroak> | undefined => state.croaks.paginator