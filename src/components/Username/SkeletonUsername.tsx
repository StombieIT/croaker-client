import { ComponentProps, FC } from "react"
import Skeleton from "react-loading-skeleton"

import classes from "./Username.module.scss"

export const SkeletonUsername: FC<ComponentProps<typeof Skeleton>> = props => {
    return <h6 className={ classes.container }>
        <Skeleton {...props} />
    </h6>
}
