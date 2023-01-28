import { IActivable } from "../../models/IActivable"
import { ICroak } from "../../models/ICroak"
import { IIdentifiable } from "../../models/IIdentifiable"
import { IPaginator } from "../../models/IPaginator"
import { RootState } from "../../store"
import { ICroaksState } from "./croaksSlice"

export const selectCroaksState = (state: RootState): ICroaksState => state.croaks

export const selectCroaksPaginator = (state: RootState): IPaginator<ICroak> | undefined => state.croaks.paginator

export const selectIsFilledOriginalCroakById = (id: number) => (state: RootState): boolean =>
    state.croaks
        .paginator
        ?.items
        .filter(croak => croak.originalCroak?.id === id)
        .every(croak => !!croak.originalCroak?.text)
        ?? false

export const selectOriginalCroakOfCroakById = (id: number) => (state: RootState): Partial<ICroak> & IActivable & IIdentifiable | undefined =>
    state.croaks
        .paginator
        ?.items
        .find(croak => croak.id === id)
        ?.originalCroak