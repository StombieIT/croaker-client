import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICroak } from "../../models/ICroak"

export interface ICroaksState {
    list: Array<ICroak>
}

const initialState: ICroaksState = {
    list: []
}

const croaksSlice = createSlice({
    name: "croaks",
    initialState,
    reducers: {
        appendCroak: (state, action: PayloadAction<ICroak>): void => {
            state.list.push(action.payload)
        },

        appendCroaks: (state, action: PayloadAction<Array<ICroak>>): void => {
            state.list.push(...action.payload)
        },

        toggleLikesIsActive(state, action: PayloadAction<number>): void {
            state.list.forEach(croak => {
                if (croak.id === action.payload) {
                    croak.likes.isActive = !croak.likes.isActive
                }
            })
        },

        toggleCommentsIsActive(state, action: PayloadAction<number>): void {
            state.list.forEach(croak => {
                if (croak.id === action.payload) {
                    croak.comments.isActive = !croak.comments.isActive
                }
            })
        },

        toggleRecroaksIsActive(state, action: PayloadAction<number>): void {
            state.list.forEach(croak => {
                if (croak.id === action.payload) {
                    croak.recroaks.isActive = !croak.recroaks.isActive
                }
            })
        }
    }
})

export const croaksReducer = croaksSlice.reducer

export const { appendCroak, appendCroaks, toggleLikesIsActive, toggleCommentsIsActive, toggleRecroaksIsActive } = croaksSlice.actions