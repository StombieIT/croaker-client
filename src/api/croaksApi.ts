import { ICroakDto } from "../models/ICroakDto"
import { IPaginator } from "../models/IPaginator"
import { api } from "./api"

export const getCroaksByUserId = (userId: number, page: number = 1, limit: number = 10): Promise<IPaginator<ICroakDto>> =>
    api.get<IPaginator<ICroakDto>>(`/croaks/by-user-id/${userId}?page=${page}&limit=${limit}`)
        .then(response => response.data)

export const getRepliesByUserId = (userId: number, page: number = 1, limit: number = 10): Promise<IPaginator<ICroakDto>> =>
    api.get<IPaginator<ICroakDto>>(`/croaks/replies/by-user-id/${userId}?page=${page}&limit=${limit}`)
        .then(response => response.data)

export const getCroakById = (id: number): Promise<ICroakDto> =>
    api.get<ICroakDto>(`/croaks/${id}`)
        .then(response => response.data)