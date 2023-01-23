import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { WritableDraft } from "immer/dist/internal"
import { IField } from "../../models/IField"
import { mergeValidators } from "../../utils/mergeValidators"
import { minLength } from "../../validators/minLength"

export interface ILoginFormState {
    isValid: boolean,
    username: IField<string>,
    password: IField<string>
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
    state.username.errors = mergeValidators(minLength(5))(state.username.value)
    state.password.errors = mergeValidators(minLength(8))(state.password.value)
    state.isValid = !state.username.errors.length && !state.password.errors.length
}

const loginFormSlice = createSlice({
    name: "loginForm",
    initialState,
    reducers: {
        changeUsername(state, action: PayloadAction<string>): void {
            state.username.value = action.payload
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