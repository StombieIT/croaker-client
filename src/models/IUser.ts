import { DateJson } from "./DateJson"
import { IIdentifiable } from "./IIdentifiable"

export interface IUser extends IIdentifiable {
    username: string,
    name: string,
    avatarLink: string | null,
    registrationDate: DateJson
}