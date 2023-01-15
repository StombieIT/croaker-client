import classNames from "classnames"
import { FC, HTMLAttributes } from "react"

import classes from "./Username.module.scss"

interface IUsernameProps extends HTMLAttributes<HTMLHeadingElement> {
    children: string,
    className?: string
}

export const Username: FC<IUsernameProps> = ({children, className, ...props}) => {
    const usernameClass: string = classNames(className, classes.container)
    
    return <h6 {...props} className={ usernameClass }>
        @{ children }
    </h6>
}