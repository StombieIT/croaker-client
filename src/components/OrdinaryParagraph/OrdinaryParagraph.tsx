import { FC, HTMLAttributes, ReactNode } from "react"
import classNames from "classnames"

import classes from "./OrdinaryParagraph.module.css"

interface IOrdinaryParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode,
    className?: string
}

export const OrdinaryParagraph: FC<IOrdinaryParagraphProps> = ({children, className, ...props}) => {
    const paragraphClass: string = classNames(className, classes.container)
    
    return <p {...props} className={ paragraphClass }>
        { children }
    </p>
}