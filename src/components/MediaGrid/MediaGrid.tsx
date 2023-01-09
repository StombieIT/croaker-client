import classNames from "classnames"
import { FC, Children, ReactNode } from "react"
import { Media } from "../Media/Media"

import classes from "./MediaGrid.module.scss"

interface IMediaGridProps {
    children: Array<ReactNode>,
    className?: string
}

export const MediaGrid: FC<IMediaGridProps> = ({children, className}) => {
    const gridClass: string = classNames(className, classes.grid)
    
    return <div className={ gridClass }>
        {
            Children.map(children, child => <Media className={ classes.wrapper }>{ child }</Media>)
        }
    </div>
}