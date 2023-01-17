import { ICroak } from "../models/ICroak"
import { IPaginator } from "../models/IPaginator"
import { croaksPaginator } from "./fakeObjects"

export const getCroaksByUserId = (userId: number): Promise<IPaginator<ICroak>> => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(croaksPaginator)
    }, 1_700)
})