import { FC, ReactNode } from "react"

import classes from "./Banner.module.scss"

interface IBannerProps {
    children: ReactNode
}

export const Banner: FC<IBannerProps> = ({children}) => {
    return <div className={ classes.banner }>
        { children }
    </div>
}