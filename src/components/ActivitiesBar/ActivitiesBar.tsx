import { FC, HTMLAttributes } from "react"
import { IActivity } from "../../models/IActivity"
import { Activity, ActivityType } from "../Activity/Activity"

interface IActivitiesBarProps extends HTMLAttributes<HTMLDivElement> {
    likes: IActivity,
    comments: IActivity,
    recroaks: IActivity,
    approximately?: boolean,
    onLikesClick?: () => void,
    onCommentsClick?: () => void,
    onRecroaksClick?: () => void
}

export const ActivitiesBar : FC<IActivitiesBarProps> = ({
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
        <Activity
            type={ ActivityType.LIKES }
            activity={ likes }
            onClick={ onLikesClick }
            approximately={ approximately }
        />
        <Activity
            type={ ActivityType.COMMENTS }
            activity={ comments }
            onClick={ onCommentsClick }
            approximately={ approximately }
        />
        <Activity
            type={ ActivityType.RECROAKS }
            activity={ recroaks }
            onClick={ onRecroaksClick }
            approximately={ approximately }
        />
    </div>
}