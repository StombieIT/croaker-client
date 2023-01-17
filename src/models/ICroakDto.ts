import { ICroakBase } from "./ICroakBase"
import { IReactionDto } from "./IReactionDto"

export interface ICroakDto extends ICroakBase {
    likes: IReactionDto,
    comments: IReactionDto,
    recroaks: IReactionDto
}