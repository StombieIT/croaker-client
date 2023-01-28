import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { WritableDraft } from "immer/dist/internal"
import { ICroak } from "../../models/ICroak"
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

        toggleLikesIsActive(state, action: PayloadAction<number>): void {
            if (state.paginator) {
                state.paginator.items.forEach(croak => {
                    if (croak.id === action.payload) {
                        croak.likes.isActive = !croak.likes.isActive
                    }
                })
            }
        },

        toggleCommentsIsActive(state, action: PayloadAction<number>): void {
            if (state.paginator) {
                state.paginator.items.forEach(croak => {
                    if (croak.id === action.payload) {
                        croak.comments.isActive = !croak.comments.isActive
                    }
                })
            }
        },

        toggleRepliesIsActive(state, action: PayloadAction<number>): void {
            if (state.paginator) {
                state.paginator.items.forEach(croak => {
                    if (croak.id === action.payload) {
                        croak.replies.isActive = !croak.replies.isActive
                    }
                })
            }
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
    mergePaginator, toggleLikesIsActive, toggleCommentsIsActive,
    toggleRepliesIsActive, setIsLoading, garbleOriginalCroak,
    setOriginalCroakIsActive, tearDown
} = croaksSlice.actions

export const fetchNextCroaksByUserId = createAction<number>(`${croaksSlice.name}/fetchNextCroaksByUserId`)
export const fetchNextRepliesByUserId = createAction<number>(`${croaksSlice.name}/fetchNextRepliesByUserId`)
export const fetchOriginalCroakById = createAction<number>(`${croaksSlice.name}/fetchOriginalCroakById`)