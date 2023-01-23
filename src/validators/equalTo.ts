import { Validator } from "../models/Validator"

export const equalTo = (mainValue: string): Validator<string> => value => {
    if (mainValue !== value) {
        return "Fields must match"
    }
    return undefined
}