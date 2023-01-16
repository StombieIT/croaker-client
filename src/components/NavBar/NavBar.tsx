import {
    FC, ReactElement, HTMLAttributes,
    Children, ComponentProps, cloneElement
} from "react"
import { NavLink } from "react-router-dom"
import classNames from "classnames"

import classes from "./NavBar.module.scss"

interface INavBarProps extends HTMLAttributes<HTMLDivElement> {
    children: Array<ReactElement<ComponentProps<typeof NavLink>>>,
    className?: string
}

export const NavBar: FC<INavBarProps> = ({children, className, ...props}) => {
    const navBarClass: string = classNames(classes.navbar, className)
    
    return <nav {...props} className={ navBarClass }>
        {
            Children.map(children, child => cloneElement<ComponentProps<typeof NavLink>>(child, {
                className: props => {
                    let childClassName: string | undefined
                    if (typeof child.props.className === "string" || typeof child.props.className === "undefined") {
                        childClassName = child.props.className
                    } else {
                        childClassName = child.props.className(props)
                    }

                    return classNames(classes.link, {
                        [classes.active]: props.isActive
                    }, childClassName)
                },
            }))
        }
    </nav>
}