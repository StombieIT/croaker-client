import classNames from "classnames"
import { FC, HTMLAttributes } from "react"

import classes from "./PreLoader.module.scss"
import preloaderIcon from "./preloaderIcon.png"

interface IPreLoaderProps extends HTMLAttributes<HTMLImageElement> {
    className?: string
}

export const PreLoader: FC<IPreLoaderProps> = ({className, ...props}) => {
    const preloaderClass: string = classNames(classes.icon, className)
    
    return <img
        {...props}
        className={ preloaderClass }
        src={ preloaderIcon }
        alt="PreLoader"
    />
}