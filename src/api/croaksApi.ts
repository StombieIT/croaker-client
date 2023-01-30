import { api } from "./api"
import { GetPaginatorApiMethod } from "../models/GetPaginatorApiMethod"
import { ICroakDto } from "../models/ICroakDto"
import { IIdentifiable } from "../models/IIdentifiable"
import { IPaginator } from "../models/IPaginator"
import { PageableParamDefault } from "../models/PageableParamDefault"

export const getCroaksByUserId: GetPaginatorApiMethod<ICroakDto, IIdentifiable> = ({
    id,
    page = PageableParamDefault.PAGE,
    limit = PageableParamDefault.LIMIT
}) =>
    api.get<IPaginator<ICroakDto>>(`/croaks/by-user-id/${id}?page=${page}&limit=${limit}`)
        .then(response => response.data)

export const getRepliesByUserId: GetPaginatorApiMethod<ICroakDto, IIdentifiable> = ({
    id,
    page = PageableParamDefault.PAGE,
    limit = PageableParamDefault.LIMIT
}) =>
    api.get<IPaginator<ICroakDto>>(`/croaks/replies/by-user-id/${id}?page=${page}&limit=${limit}`)
        .then(response => response.data)

export const getLikesByUserId: GetPaginatorApiMethod<ICroakDto, IIdentifiable> = ({
    id,
    page = PageableParamDefault.PAGE,
    limit = PageableParamDefault.LIMIT
}) =>
    api.get<IPaginator<ICroakDto>>(`/croaks/likes/by-user-id/${id}?page=${page}&limit=${limit}`)
        .then(response => response.data)

export const getCroakById = (id: number): Promise<ICroakDto> =>
    api.get<ICroakDto>(`/croaks/${id}`)
        .then(response => response.data)