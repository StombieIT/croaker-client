import { FC, HTMLAttributes } from "react"
import { IActivity } from "../../models/IActivity"
import { Activity, ActivityType } from "../Activity/Activity"

interface IActivitiesBarProps extends HTMLAttributes<HTMLDivElement> {
    likes: IActivity,
    comments: IActivity,
    recroaks: IActivity,
    approximately?: boolean
}

export const ActivitiesBar : FC<IActivitiesBarProps> = ({
    likes,
    comments,
    recroaks,
    approximately = false,
    ...props
}) => {
    return <div {...props} >
        <Activity
            type={ ActivityType.LIKES }
            activity={ likes }
            approximately={ approximately }
        />
        <Activity
            type={ ActivityType.COMMENTS }
            activity={ comments }
            approximately={ approximately }
        />
        <Activity
            type={ ActivityType.RECROAKS }
            activity={ recroaks }
            approximately={ approximately }
        />
    </div>
}