import { FC, HTMLAttributes } from "react"
import { IReaction } from "../../models/IReaction"
import { Reaction, ReactionType } from "../Reaction/Reaction"

interface IReactionsBarProps extends HTMLAttributes<HTMLDivElement> {
    likes: IReaction,
    comments: IReaction,
    replies: IReaction,
    approximately?: boolean,
    onLikesClick?: () => void,
    onCommentsClick?: () => void,
    onRepliesClick?: () => void
}

export const ReactionsBar : FC<IReactionsBarProps> = ({
    likes,
    comments,
    replies,
    approximately = false,
    onLikesClick,
    onCommentsClick,
    onRepliesClick,
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
            type={ ReactionType.REPLIES }
            reaction={ replies }
            onClick={ onRepliesClick }
            approximately={ approximately }
        />
    </div>
}