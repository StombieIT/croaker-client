import { mergeValidators } from "./mergeValidators"
import { minLength } from "../validators/minLength"

export const validateUsername = (username: string): Array<string> =>
    mergeValidators(minLength(5))(username)