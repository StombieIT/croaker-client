import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICroak } from "../../models/ICroak"
import { IPaginator } from "../../models/IPaginator"

export interface ICroaksState {
    isLoading: boolean,
    paginator?: IPaginator<ICroak>
}

const initialState: ICroaksState = {
    isLoading: true
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

        tearDown(state): ICroaksState {
            return initialState
        }
    }
})

export const croaksReducer = croaksSlice.reducer

export const {
    mergePaginator, toggleLikesIsActive, toggleCommentsIsActive,
    toggleRepliesIsActive, setIsLoading, tearDown
} = croaksSlice.actions

export const fetchNextCroaksByUserId = createAction<number>(`${croaksSlice.name}/fetchNextCroaksByUserId`)