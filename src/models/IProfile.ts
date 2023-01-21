import { IUser } from "./IUser"

export interface IProfile {
    user: IUser,
    description: string | null,
    city: string,
    country: string,
    croaksCount: number,
    followersCount: number,
    followingCount: number,
    backgroundImageLink: string | null
}