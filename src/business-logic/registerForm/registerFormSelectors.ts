import { RootState } from "../../store"
import { IRegisterFormState } from "./registerFormSlice"

export const selectRegisterFormState = (state: RootState): IRegisterFormState => state.registerForm