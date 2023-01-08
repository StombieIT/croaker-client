import classNames from "classnames"
import { FC, ReactNode } from "react"

import classes from "./Media.module.scss"

interface IMediaProps {
    children: ReactNode,
    className?: string
}

export const Media: FC<IMediaProps> = ({children, className}) => {
    const mediaClass: string = classNames(className, classes.wrapper)
    
    return <div className={ mediaClass }>
        { children }
    </div>
}