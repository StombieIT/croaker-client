import { IActivable } from "./IActivable"
import { ICroakBase } from "./ICroakBase"
import { ICroakDto } from "./ICroakDto"
import { IIdentifiable } from "./IIdentifiable"
import { IReaction } from "./IReaction"

export interface ICroak extends ICroakBase {
    likes: IReaction,
    comments: IReaction,
    replies: IReaction,
    originalCroak?: Partial<ICroak> & IActivable & IIdentifiable
}

// TODO: make deep checking
export const isICroak = (croak: any): croak is ICroak =>
    croak.id !== undefined &&
    croak.text !== undefined &&
    croak.creationDate !== undefined &&
    croak.author !== undefined &&
    croak.imagesLinks !== undefined &&
    croak.likes !== undefined &&
    croak.comments !== undefined &&
    croak.replies !== undefined

export const fromDto = (croak: ICroakDto): ICroak => {
    const {originalCroakId, ...croakCutted} = croak
    return {
        ...croakCutted,
        likes: {...croak.likes, isLoading: false},
        comments: {...croak.comments, isLoading: false},
        replies: {...croak.replies, isLoading: false},
        originalCroak: croak.originalCroakId ? {isActive: false, id: croak.originalCroakId} : undefined
    }
}