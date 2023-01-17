import { ICroakBase } from "./ICroakBase"
import { IReaction } from "./IReaction"

export interface ICroak extends ICroakBase {
    likes: IReaction,
    comments: IReaction,
    recroaks: IReaction
}