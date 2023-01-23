import { Validator } from "../models/Validator"

export const mergeValidators = <T extends string | boolean>(...validators: Array<Validator<T>>) =>
(value: T): Array<string> => {
    return validators.map(validator => validator(value)).filter(error => !!error) as Array<string>
}