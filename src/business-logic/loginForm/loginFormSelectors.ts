import { RootState } from "../../store"
import { ILoginFormState } from "./loginFormSlice"

export const selectLoginFormState = (state: RootState): ILoginFormState => state.loginForm