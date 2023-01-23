import { Validator } from "../models/Validator"

export const minLength = (min: number): Validator<string> => (value: string) => {
    if (value.length < min) {
        return `Field must have at least ${min} length`
    }
    return undefined
}