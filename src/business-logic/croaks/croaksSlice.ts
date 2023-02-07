import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { WritableDraft } from "immer/dist/internal"
import { IReactionDto } from "../../models/IReactionDto"
import { ICroak, isICroak } from "../../models/ICroak"
import { IPaginator } from "../../models/IPaginator"

export interface ICroaksState {
    isLoading: boolean,
    paginator?: IPaginator<ICroak>
}

const initialState: ICroaksState = {
    isLoading: true
}

const garble = (state: WritableDraft<ICroaksState>, newOriginalCroak: ICroak) => {
    const {originalCroak, ...originalCroakCutted} = newOriginalCroak
    state.paginator
        ?.items
        .filter(croak => croak.originalCroak?.id === originalCroakCutted.id)
        .forEach(croak => {
            if (croak.originalCroak) {
                croak.originalCroak = {...croak.originalCroak, ...originalCroakCutted}
            }
        })
}

const croaksSlice = createSlice({
    name: "croaks",
    initialState,
    reducers: {
        setIsLoading(state, action: PayloadAction<boolean>): void {
            state.isLoading = action.payload
        },

        mergePaginator(state, action: PayloadAction<IPaginator<ICroak>>): void {
            if (state.paginator) {
                state.paginator = {
                    ...state.paginator,
                    ...action.payload,
                    items: [
                        ...state.paginator.items,
                        ...action.payload.items
                    ]
                }
            } else {
                state.paginator = action.payload
            }
            state.paginator.items.forEach(croak => garble(state, croak))
        },

        /**
         * Sets @param isLoading status to all croaks and original croaks
         * with @param id if they present
         * */
        setLikesIsLoadingByCroakId(state, action: PayloadAction<{id: number, isLoading: boolean}>): void {
            state.paginator?.items.forEach(croak => {
                if (action.payload.id === croak.originalCroak?.id && isICroak(croak.originalCroak)) {
                    croak.originalCroak.likes.isLoading = action.payload.isLoading
                }
                if (action.payload.id === croak.id) {
                    croak.likes.isLoading = action.payload.isLoading
                }
            })
        },

        /**
         * Add updated fields of @param status to all croaks and original croaks
         * with @param id if they present
         * */
        setLikesByCroakId(state, action: PayloadAction<{id: number, likes: IReactionDto}>): void {
            state.paginator?.items.forEach(croak => {
                if (action.payload.id === croak.originalCroak?.id && isICroak(croak.originalCroak)) {
                    croak.originalCroak.likes = {...croak.originalCroak.likes, ...action.payload.likes}
                }
                if (action.payload.id === croak.id) {
                    croak.likes = {...croak.likes, ...action.payload.likes}
                }
            })
        },

        garbleOriginalCroak(state, action: PayloadAction<ICroak>): void {
            garble(state, action.payload)
        },

        setOriginalCroakIsActive(state, action: PayloadAction<{croakId: number, isActive: boolean}>): void {
            state.paginator
                ?.items
                .filter(croak => croak.id === action.payload.croakId)
                .forEach(croak => {
                    if (croak.originalCroak) {
                        croak.originalCroak.isActive = action.payload.isActive
                    }
                })
        },

        tearDown(state): ICroaksState {
            return initialState
        }
    }
})

export const croaksReducer = croaksSlice.reducer

export const {
    setIsLoading, mergePaginator, setLikesIsLoadingByCroakId,
    setLikesByCroakId, garbleOriginalCroak, setOriginalCroakIsActive, tearDown
} = croaksSlice.actions

export const fetchNextCroaksByUserId = createAction<number>(`${croaksSlice.name}/fetchNextCroaksByUserId`)
export const fetchNextRepliesByUserId = createAction<number>(`${croaksSlice.name}/fetchNextRepliesByUserId`)
export const fetchNextLikesByUserId = createAction<number>(`${croaksSlice.name}/fetchNextLikesByUserId`)
export const fetchOriginalCroakById = createAction<number>(`${croaksSlice.name}/fetchOriginalCroakById`)
export const toggleLikesIsActiveByCroakId = createAction<number>(`${croaksSlice.name}/toggleLikesIsActiveByCroakId`)