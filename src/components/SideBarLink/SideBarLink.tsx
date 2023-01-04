import classNames from "classnames"
import { FC, PropsWithChildren, ReactNode } from "react"
import { NavLink, To } from "react-router-dom"
import { NavFactoryMethod } from "../../models/NavFactoryMethod"

import classes from "./SideBarLink.module.scss"

interface ISideBarLinkProps {
    to: To,
    iconSrc: NavFactoryMethod<string>,
    iconAlt?: NavFactoryMethod<string>,
    children: string
}

export const SideBarLink: FC<ISideBarLinkProps> = ({
    to,
    iconSrc,
    iconAlt = props => children + (props.isActive ? " active" : "") + " icon",
    children
}) => {
    const consideredLinkClass = (isActive: boolean): string => classNames(classes.common, {
        [classes.notActive]: !isActive,
        [classes.active]: isActive
    })

    return <NavLink
        className={ ({isActive}) => consideredLinkClass(isActive)}
        to={ to }
    >
        {
            props => <>
                <div className={ classes.iconContainer }>
                    <img
                        className={ classes.icon }
                        src={ iconSrc(props) }
                        alt={ iconAlt(props) }
                    />
                </div>
                <div className={ classes.childrenContainer }>
                    { children }
                </div>
            </>
        }
    </NavLink>
}