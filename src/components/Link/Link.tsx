import classNames from "classnames"
import { ComponentProps, FC } from "react"
import { Link as RouterLink } from "react-router-dom"

import classes from "./Link.module.scss"

export const Link: FC<ComponentProps<typeof RouterLink>> = ({className, ...props}) => {
    return <RouterLink {...props} className={ classNames(classes.link, className) } />
}