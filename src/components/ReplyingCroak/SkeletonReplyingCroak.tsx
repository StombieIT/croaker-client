import { FC } from "react"
import { SkeletonCroak } from "../Croak/SkeletonCroak"

import classes from "./ReplyingCroak.module.scss"

export const SkeletonReplyingCroak: FC = () => {
    return <div className={ classes.container }>
        <SkeletonCroak />
    </div>
}