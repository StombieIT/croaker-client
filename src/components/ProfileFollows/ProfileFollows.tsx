import { FC } from "react"
import { useSelector } from "react-redux"
import { SkeletonProfileFollows } from "./SkeletonProfileFollows"
import { selectProfileFollows } from "../../business-logic/profile/profileSelectors"
import { formatNumber } from "../../utils/formatNumber"

import classes from "./ProfileFollows.module.scss"

export interface IProfileFollowsProps {
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

const ProfileFollowsContainer: FC = () => {
    const profileFollows: IProfileFollowsProps | undefined = useSelector(selectProfileFollows)

    if (!profileFollows) {
        return <SkeletonProfileFollows />
    }

    return <ProfileFollows
        {...profileFollows}
    />
}

export default ProfileFollowsContainer