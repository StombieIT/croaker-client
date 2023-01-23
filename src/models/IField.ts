export interface IField<T extends string | boolean> {
    errors: Array<string>,
    value: T
}