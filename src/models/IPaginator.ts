export interface IPaginator<T> {
    items: Array<T>,
    page: number,
    hasNextPage: boolean,
    pageExists: boolean,
    hasPreviousPage: boolean
}