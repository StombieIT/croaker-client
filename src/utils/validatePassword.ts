import { mergeValidators } from "./mergeValidators"
import { minLength } from "../validators/minLength"

export const validatePassword = (password: string): Array<string> =>
    mergeValidators(minLength(6))(password)