import { DateJson } from "./DateJson"
import { IUser } from "./IUser"
import { IIdentifiable } from "./IIdentifiable"

export interface ICroakBase extends IIdentifiable {
    text: string,
    creationDate: DateJson,
    author: IUser,
    imagesLinks: Array<string>
}