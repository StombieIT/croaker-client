import { FC } from "react"
import classNames from "classnames"
import Skeleton from "react-loading-skeleton"

import classes from "./ProfileFollows.module.scss"

enum SkeletonProfileFollowsUnit {
    FOLLOWERS_WIDTH = 60,
    FOLLOWING_WIDTH = 50,
    COMMON_HEIGHT = 15
}

export const SkeletonProfileFollows: FC = () => {
    return <div className={ classNames(classes.container, classes.skeleton) }>
        <div className={ classes.element }>
            <Skeleton
                width={ SkeletonProfileFollowsUnit.FOLLOWERS_WIDTH }
                height={ SkeletonProfileFollowsUnit.COMMON_HEIGHT }
            />
        </div>
        <div className="element">
            <Skeleton
                width={ SkeletonProfileFollowsUnit.FOLLOWING_WIDTH }
                height={ SkeletonProfileFollowsUnit.COMMON_HEIGHT }
            />
        </div>
    </div>
}