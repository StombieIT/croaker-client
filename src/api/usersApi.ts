import { api } from "./api"
import { IUser } from "../models/IUser"

export const getUserByAuth = (): Promise<IUser> => api.get<IUser>("/users/by-auth").then(response => response.data)