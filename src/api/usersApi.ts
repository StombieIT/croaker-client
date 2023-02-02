import { api } from "./api"
import { IUser } from "../models/IUser"

export const getUserByAuth = (): Promise<IUser> =>
    api.get<IUser>("/users/by-auth")
        .then(response => response.data)

export const isFollowedToUserWithId = (id: number): Promise<boolean> =>
    api.get<boolean>(`/users/is-followed-to/${id}`)
        .then(response => response.data)

export const followToUserWithId = (id: number): Promise<boolean> =>    
    api.put<boolean>(`/users/follow-to/${id}`)
        .then(response => response.data)

export const unfollowToUserWithId = (id: number): Promise<boolean> =>
    api.put<boolean>(`/users/unfollow-to/${id}`)
        .then(response => response.data)