import { FC } from "react"
import classNames from "classnames"
import Skeleton from "react-loading-skeleton"

import classes from "./ProfileMeta.module.scss"

enum SkeletonProfileMetaUnit {
    COMMON_HEIGHT = 15,
    USER_ID_WIDTH = 70,
    CITY_WIDTH = 100,
    REGISTRATION_DATE_WIDTH = 120
}

export const SkeletonProfileMeta: FC = () => {
    return <div className={ classNames(classes.container, classes.skeleton) }>
        <Skeleton width={ SkeletonProfileMetaUnit.USER_ID_WIDTH } height={ SkeletonProfileMetaUnit.COMMON_HEIGHT } />
        <Skeleton width={ SkeletonProfileMetaUnit.CITY_WIDTH } height={ SkeletonProfileMetaUnit.COMMON_HEIGHT } />
        <Skeleton width={ SkeletonProfileMetaUnit.REGISTRATION_DATE_WIDTH } height={ SkeletonProfileMetaUnit.COMMON_HEIGHT } />
    </div>
}