import { api } from "./api"
import { IProfileDto } from "../models/IProfileDto"

export const getProfileById = (id: number) => api.get<IProfileDto>(`/profiles/${id}`)
    .then(response => response.data)