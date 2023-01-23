import { api } from "./api"
import { IProfile } from "../models/IProfile"

export const getProfileById = (id: number) => api.get<IProfile>(`/profiles/${id}`).then(response => response.data)