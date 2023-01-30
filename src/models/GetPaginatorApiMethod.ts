import { IPageableParams } from "./IPageableParams"
import { IPaginator } from "./IPaginator"

export type GetPaginatorApiMethod<R, P = {}>
    = (params: P & Partial<IPageableParams>) => Promise<IPaginator<R>>