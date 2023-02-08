import { FC } from "react"
import Skeleton from "react-loading-skeleton"

import classes from "./ProfileName.module.css"


export const SkeletonProfileName: FC = () => {
    return <h4 className={ classes.name }>
        <Skeleton width={ 160 } />
    </h4>
}
