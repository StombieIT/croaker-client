import { FC } from "react"
import classNames from "classnames"
import { PathnameUnit } from "../../models/PathnameUnit"
import { Pathname } from "../../models/Pathname"
import TriggerLink from "../TriggerLink/TriggerLink"

import classes from "./SideBarLink.module.scss"

interface ISideBarLinkProps {
    to: Pathname,
    iconSrc: (isActive: boolean) => string,
    iconAlt?: (isActive: boolean) => string,
    children: string
}

export const SideBarLink: FC<ISideBarLinkProps> = ({
    to,
    iconSrc,
    iconAlt = isActive => `${children} ${isActive ? "active " : ""}icon`,
    children
}) => {
    const consideredLinkClass = (isActive: boolean): string => classNames(classes.common, {
        [classes.notActive]: !isActive,
        [classes.active]: isActive
    })
    
    const toPathnames = to.split(PathnameUnit.SEPARATOR).filter(toPathname => !!toPathname)

    return <TriggerLink
        when={ pathname => pathname.startsWith(`${PathnameUnit.SEPARATOR}${toPathnames.at(0) ?? ""}`) }
        className={ consideredLinkClass }
        to={ to }
    >
        {
            isActive => <>
                <div className={ classes.iconContainer }>
                    <img
                        src={ iconSrc(isActive) }
                        alt={ iconAlt(isActive) }
                        className={ classes.icon }
                    />
                </div>
                <div className={ classes.childrenContainer }>
                    { children }
                </div>
            </>
        }
    </TriggerLink>
}