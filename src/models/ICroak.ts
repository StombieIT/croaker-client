import { DateJson } from "./DateJson"
import { IReaction } from "./IReaction"
import { IUser } from "./IUser"

export interface ICroak {
    id: number,
    text: string,
    creationDate: DateJson,
    likes: IReaction,
    comments: IReaction,
    recroaks: IReaction,
    author: IUser
    imagesLinks: Array<string>
}