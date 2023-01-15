import { FC } from "react"
import { formatNumber } from "../../utils/formatNumber"

import classes from "./ProfileFollows.module.scss"

interface IProfileFollowsProps {
    followersCount: number,
    followingCount: number
}

export const ProfileFollows: FC<IProfileFollowsProps> = ({followersCount, followingCount}) => {
    return <div className={ classes.container }>
        <div className={ classes.element }>
            <b className={ classes.bold }>{ formatNumber(followersCount) }</b> Followers
        </div>
        <div className={ classes.element }>
            <b className={ classes.bold }>{ formatNumber(followingCount) }</b> Following
        </div>
    </div>
}