import { WritableDraft } from "immer/dist/internal"
import { ICroak } from "../models/ICroak"
import { IPaginator } from "../models/IPaginator"

export const garble = (croaksPaginator: WritableDraft<IPaginator<ICroak>> | undefined, newOriginalCroak: ICroak) => {
    const {originalCroak, ...originalCroakCutted} = newOriginalCroak
    croaksPaginator
        ?.items
        .filter(croak => croak.originalCroak?.id === originalCroakCutted.id)
        .forEach(croak => {
            if (croak.originalCroak) {
                croak.originalCroak = {...croak.originalCroak, ...originalCroakCutted}
            }
        })
}