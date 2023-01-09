import { ICroak } from "../../models/ICroak"
import { RootState } from "../../store"

export const selectCroaksList = (state: RootState): Array<ICroak> => state.croaks.list