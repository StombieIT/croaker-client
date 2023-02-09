import { FC } from "react"
import Skeleton from "react-loading-skeleton"
import { OrdinaryParagraph } from "../OrdinaryParagraph/OrdinaryParagraph"

export const SkeletonProfileDescription: FC = () => {
    return <OrdinaryParagraph>
        <Skeleton />
        <Skeleton />
        <Skeleton />
    </OrdinaryParagraph>
}
