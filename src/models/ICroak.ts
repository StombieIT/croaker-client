import { DateJson } from "./DateJson"
import { IActivity } from "./IActivity"
import { ILink } from "./ILink"
import { IUser } from "./IUser"

export interface ICroak {
    id: number,
    text: string,
    creationDate: DateJson,
    likes: IActivity,
    comments: IActivity,
    recroaks: IActivity,
    author: IUser
    imagesLinks: Array<ILink>
}