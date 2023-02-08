import { FC } from "react"
import Skeleton from "react-loading-skeleton"

// import classes from "./SkeletonProfileDescription.module.css"

export const SkeletonProfileDescription: FC = () => {
    return <Skeleton
        count={ 3 }
    />
}
