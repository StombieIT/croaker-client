import { DateJson } from "./DateJson"

export interface IUser {
    id: number,
    username: string,
    name: string,
    avatarLink: string | null,
    registrationDate: DateJson
}