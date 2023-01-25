import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { WritableDraft } from "immer/dist/internal"
import { IField } from "../../models/IField"
import { validatePassword } from "../../utils/validatePassword"
import { validateUsername } from "../../utils/validateUsername"

export interface ILoginFormState {
    isValid: boolean,
    username: IField,
    password: IField
}

const initialState: ILoginFormState = {
    isValid: false,
    username: {
        value: "",
        errors: []
    },
    password: {
        value: "",
        errors: []
    }
}

const validate = (state: WritableDraft<ILoginFormState>): void => {
    state.username.errors = validateUsername(state.username.value)
    state.password.errors = validatePassword(state.password.value)
    state.isValid = !state.username.errors.length && !state.password.errors.length
}

const loginFormSlice = createSlice({
    name: "loginForm",
    initialState,
    reducers: {
        changeUsername(state, action: PayloadAction<string>): void {
            state.username.value = action.payload.toLowerCase()
            validate(state)
        },

        changePassword(state, action: PayloadAction<string>): void {
            state.password.value = action.payload
            validate(state)
        },

        tearDown(state): ILoginFormState {
            return initialState
        }
    }
})

export const loginFormReducer = loginFormSlice.reducer

export const { changeUsername, changePassword, tearDown } = loginFormSlice.actions