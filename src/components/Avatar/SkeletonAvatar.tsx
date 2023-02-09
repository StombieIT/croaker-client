import { FC } from "react"
import Skeleton from "react-loading-skeleton"

interface ISkeletonAvatarProps {
    className: string,
    size?: number
}

export const SkeletonAvatar: FC<ISkeletonAvatarProps> = ({
    className,
    size
}) => {
    if (size) {
        return <div className={ className }>
            <Skeleton
                width={ size }
                height={ size }
                circle 
            />
        </div>
    }

    return <Skeleton
        className={ className }
        circle
    />
}