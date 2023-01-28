import { FC, HTMLAttributes } from "react"
import classNames from "classnames"

import classes from "./Avatar.module.scss"
import placeholderIcon from "./placeholder.png"

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
            src={ src ?? placeholderIcon }
            alt={ alt }
        />
    </div>
}