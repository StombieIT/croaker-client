import classNames from "classnames"
import { FC, HTMLAttributes } from "react"

import classes from "./OrdinaryParagraph.module.css"

interface IOrdinaryParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
    children: string,
    className?: string
}

export const OrdinaryParagraph: FC<IOrdinaryParagraphProps> = ({children, className, ...props}) => {
    const paragraphClass: string = classNames(className, classes.container)
    
    return <p {...props} className={ paragraphClass }>
        { children }
    </p>
}