import { FC, HTMLAttributes } from "react"
import { IReaction } from "../../models/IReaction"
import { Reaction, ReactionType } from "../Reaction/Reaction"

interface IReactionsBarProps extends HTMLAttributes<HTMLDivElement> {
    likes: IReaction,
    comments: IReaction,
    recroaks: IReaction,
    approximately?: boolean,
    onLikesClick?: () => void,
    onCommentsClick?: () => void,
    onRecroaksClick?: () => void
}

export const ReactionsBar : FC<IReactionsBarProps> = ({
    likes,
    comments,
    recroaks,
    approximately = false,
    onLikesClick,
    onCommentsClick,
    onRecroaksClick,
    ...props
}) => {
    return <div {...props} >
        <Reaction
            type={ ReactionType.LIKES }
            reaction={ likes }
            onClick={ onLikesClick }
            approximately={ approximately }
        />
        <Reaction
            type={ ReactionType.COMMENTS }
            reaction={ comments }
            onClick={ onCommentsClick }
            approximately={ approximately }
        />
        <Reaction
            type={ ReactionType.RECROAKS }
            reaction={ recroaks }
            onClick={ onRecroaksClick }
            approximately={ approximately }
        />
    </div>
}