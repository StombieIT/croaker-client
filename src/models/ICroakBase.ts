import { DateJson } from "./DateJson"
import { IUser } from "./IUser"

export interface ICroakBase {
    id: number,
    text: string,
    creationDate: DateJson,
    author: IUser
    imagesLinks: Array<string>
}