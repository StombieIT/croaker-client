import { DateJson } from "./DateJson"
import { IUser } from "./IUser"

export interface ICroak {
    id: number,
    text: string,
    creationDate: DateJson,
    likesCount: number,
    commentsCount: number,
    recroaksCount: number,
    author: IUser
    imagesLinks?: Array<string>,
}