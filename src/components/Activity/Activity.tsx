import { FC, MouseEvent, useMemo } from "react"
import { IActivity } from "../../models/IActivity"

import classes from "./Activity.module.scss"

import likesIcon from "./likes/icon.svg"
import likesActiveIcon from "./likes/activeIcon.svg"

import commentsIcon from "./comments/icon.svg"
import commentsActiveIcon from "./comments/activeIcon.svg"

import recroaksIcon from "./recroaks/icon.svg"
import recroaksActiveIcon from "./recroaks/activeIcon.svg"
import { formatNumber } from "./utils"

export enum ActivityType {
    LIKES,
    COMMENTS,
    RECROAKS
}

interface IActivityProps {
    type: ActivityType,
    activity: IActivity,
    approximately?: boolean,
    onClick?: () => void
}

export const Activity: FC<IActivityProps> = ({
    type,
    activity,
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
            case ActivityType.LIKES:
                if (activity.isActive) {
                    return likesActiveIcon
                }
                return likesIcon
            case ActivityType.COMMENTS:
                if (activity.isActive) {
                    return commentsActiveIcon
                }
                return commentsIcon
            case ActivityType.RECROAKS:
                if (activity.isActive) {
                    return recroaksActiveIcon
                }
                return recroaksIcon
        }
    }, [type, activity.isActive])

    return <button className={ classes.button } onClick={ onButtonClick }>
        <img
            src={ icon }
            alt={ `${type} icon` }
            className={ classes.icon }
        />
        {
            approximately
            ? formatNumber(activity.count)
            : activity.count
        }
    </button>
}