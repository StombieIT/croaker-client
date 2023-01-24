import { FC, HTMLAttributes } from "react"

import icon from "./icon.svg"

export const Logo: FC<HTMLAttributes<HTMLImageElement>> = props => {
    return <img
        alt="Logo"
        {...props}
        src={ icon }
    />
}