import { FC } from "react"
import Skeleton from "react-loading-skeleton"
import { SkeletonAvatar } from "../Avatar/SkeletonAvatar"

import classes from "./ProfileInteractionBar.module.scss"

export const SkeletonProfileInteractionBar: FC = () => {
    return <div className={ classes.bar }>
        <SkeletonAvatar
            className={ classes.avatar }
        />
        <Skeleton
            width={ 100 }
            height={ 30 }
            borderRadius={ 20 }
        />
    </div>
}