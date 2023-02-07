import { FC } from "react"
import Skeleton from "react-loading-skeleton"

import classes from "./ProfileHeader.module.scss"

enum SkeletonProfileHeaderUnit {
    BUTTON_SIZE = 50,
    NAME_WIDTH = 150,
    CROAKS_COUNT_WIDTH = 65
}

export const SkeletonProfileHeader: FC = () => {
    return <header className={ classes.header }>
        <div className={ classes.skeletonButton }>
            <Skeleton
                width={ SkeletonProfileHeaderUnit.BUTTON_SIZE }
                height={ SkeletonProfileHeaderUnit.BUTTON_SIZE }
            />
        </div>
        <h4 className={ classes.name }>
            <Skeleton
                width={ SkeletonProfileHeaderUnit.NAME_WIDTH }
            />
        </h4>
        <div className={ classes.croaksCount }>
            <Skeleton
                width={ SkeletonProfileHeaderUnit.CROAKS_COUNT_WIDTH }
            />                
        </div>
    </header>
}