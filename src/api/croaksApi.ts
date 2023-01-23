import { ICroak } from "../models/ICroak"
import { IPaginator } from "../models/IPaginator"
import { api } from "./api"

export const getCroaksByUserId = (userId: number, page: number = 1, limit: number = 10) =>
    api.get<IPaginator<ICroak>>(`/croaks/by-user-id/${userId}?page=${page}&limit=${limit}`)
    .then(response => response.data)