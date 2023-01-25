import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { WritableDraft } from "immer/dist/internal"
import { IField } from "../../models/IField"
import { mergeValidators } from "../../utils/mergeValidators"
import { validatePassword } from "../../utils/validatePassword"
import { validateUsername } from "../../utils/validateUsername"
import { equalTo } from "../../validators/equalTo"

export interface IRegisterFormState {
    isValid: boolean,
    username: IField,
    password: IField,
    repeatedPassword: IField
}

const initialState: IRegisterFormState = {
    isValid: false,
    username: {
        value: "",
        errors: []
    },
    password: {
        value: "",
        errors: []
    },
    repeatedPassword: {
        value: "",
        errors: []
    }
}

const validate = (state: WritableDraft<IRegisterFormState>): void => {
    state.username.errors = validateUsername(state.username.value)
    state.password.errors = validatePassword(state.password.value)
    state.repeatedPassword.errors = mergeValidators(equalTo(state.password.value))(state.repeatedPassword.value)
    state.isValid = !state.username.errors.length && !state.password.errors.length && !state.repeatedPassword.errors.length
}

const registerFormSlice = createSlice({
    name: "registerForm",
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

        changeRepeatedPassword(state, action: PayloadAction<string>): void {
            state.repeatedPassword.value = action.payload
            validate(state)
        },

        tearDown(state): IRegisterFormState {
            return initialState
        }
    }
})

export const registerFormReducer = registerFormSlice.reducer

export const { changeUsername, changePassword, changeRepeatedPassword, tearDown } = registerFormSlice.actions