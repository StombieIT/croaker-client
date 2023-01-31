import { IUser } from "./IUser"

export interface IProfileDto {
    user: IUser,
    description: string | null,
    city: string,
    country: string,
    followersCount: number,
    croaksCount: number,
    followingCount: number,
    backgroundImageLink: string | null
}