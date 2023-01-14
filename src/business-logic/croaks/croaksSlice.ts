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

        toggleRecroaksIsActive(state, action: PayloadAction<number>): void {
            if (state.paginator) {
                state.paginator.items.forEach(croak => {
                    if (croak.id === action.payload) {
                        croak.recroaks.isActive = !croak.recroaks.isActive
                    }
                })
            }
        }
    }
})

export const croaksReducer = croaksSlice.reducer

export const { mergePaginator, toggleLikesIsActive, toggleCommentsIsActive, toggleRecroaksIsActive } = croaksSlice.actions

export const fetchCroaks = createAction(`${croaksSlice.name}/fetchCroaks`)