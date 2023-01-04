import classNames from "classnames"
import { FC, ButtonHTMLAttributes } from "react"

import classes from "./Button.module.scss"

export enum ButtonSubType {
    PRIMARY = "primary"
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    subType: ButtonSubType
}

export const Button: FC<IButtonProps> = ({subType, className, children, ...props}) => {
    const buttonClass: string = classNames(className, classes.common, classes[subType])

    return <button {...props} className={ buttonClass }>
        { children }
    </button>
}