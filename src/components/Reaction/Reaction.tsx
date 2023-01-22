import { FC, MouseEvent, useMemo } from "react"
import { IReaction } from "../../models/IReaction"
import { formatNumber } from "../../utils/formatNumber"

import classes from "./Reaction.module.scss"

import likesIcon from "./likes/icon.svg"
import likesActiveIcon from "./likes/activeIcon.svg"

import commentsIcon from "./comments/icon.svg"
import commentsActiveIcon from "./comments/activeIcon.svg"

import repliesIcon from "./replies/icon.svg"
import repliesActiveIcon from "./replies/activeIcon.svg"

export enum ReactionType {
    LIKES,
    COMMENTS,
    REPLIES
}

interface IReactionProps {
    type: ReactionType,
    reaction: IReaction,
    approximately?: boolean,
    onClick?: () => void
}

export const Reaction: FC<IReactionProps> = ({
    type,
    reaction,
    approximately = false,
    onClick
}) => {
    const onButtonClick = (evt: MouseEvent<HTMLButtonElement>): void => {
        evt.preventDefault()
        if (onClick) {
            onClick()
        }
    }

    const icon = useMemo<string>(() => {
        switch (type) {
            case ReactionType.LIKES:
                if (reaction.isActive) {
                    return likesActiveIcon
                }
                return likesIcon
            case ReactionType.COMMENTS:
                if (reaction.isActive) {
                    return commentsActiveIcon
                }
                return commentsIcon
            case ReactionType.REPLIES:
                if (reaction.isActive) {
                    return repliesActiveIcon
                }
                return repliesIcon
        }
    }, [type, reaction.isActive])

    return <button className={ classes.button } onClick={ onButtonClick }>
        <img
            src={ icon }
            alt={ `${type} icon` }
            className={ classes.icon }
        />
        {
            approximately
            ? formatNumber(reaction.count)
            : reaction.count
        }
    </button>
}