import { FC } from "react"
import { SideBarLink } from "../SideBarLink/SideBarLink"

import logo from "./logo.svg"
import classes from "./SideBar.module.scss"

import exploreIcon from "./explore/icon.svg"
import exploreActiveIcon from "./explore/activeIcon.svg"

import profileIcon from "./profile/icon.svg"
import profileActiveIcon from "./profile/activeIcon.svg"

export const SideBar: FC = () => {
    return <aside className={ classes.common }>
        <img
            className={ classes.logo }
            src={ logo }
            alt="Logo"
        />
        <SideBarLink
            to="/explore"
            iconSrc={ ({isActive}) => isActive ? exploreActiveIcon : exploreIcon }
        >
            Explore
        </SideBarLink>
        <SideBarLink
            to="/profile"
            iconSrc={ ({isActive}) => isActive ? profileActiveIcon : profileIcon }
        >
            Profile
        </SideBarLink>
    </aside>
}