import { FC } from "react"
import Skeleton from "react-loading-skeleton"

interface ISkeletonAvatarProps {
    size: number,
    className?: string
}

export const SkeletonAvatar: FC<ISkeletonAvatarProps> = ({size, className}) => {
    return <div className={ className }>
        <Skeleton circle width={size} height={size} />
    </div>
}