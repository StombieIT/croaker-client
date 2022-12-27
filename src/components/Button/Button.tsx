import classNames from "classnames"
import { FC, ButtonHTMLAttributes } from "react"

import classes from "./Button.module.css"

export enum ButtonSubType {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    SUCCESS = "success",
    DANGER = "danger",
    WARNING = "warning",
    LIGHT = "light",
    DARK = "dark"
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    subType: ButtonSubType
}

export const Button: FC<IButtonProps> = ({subType, className, children, ...props}) => {
    const buttonClass: string = classNames(className, {
        [classes.common]: classes.common,
        [classes[subType]]: classes[subType]
    })

    return <button {...props} className={ buttonClass }>
        { children }
    </button>
}