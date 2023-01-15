import { FC, HTMLAttributes } from "react"
import classNames from "classnames"

import classes from "./Avatar.module.scss"

interface IAvatarProps extends HTMLAttributes<HTMLDivElement> {
    src?: string,
    alt?: string,
    className?: string
}

export const Avatar: FC<IAvatarProps> = ({src, alt, className, ...props}) => {
    const avatarWrapperClass: string = classNames(className, classes.wrapper)

    return <div {...props} className={ avatarWrapperClass }>
        <img
            className={ classes.image }
            src={ src }
            alt={ alt }
        />
    </div>
}