import { FC } from "react"
import { SideBarLink } from "../SideBarLink/SideBarLink"
import { Logo } from "../Logo/Logo"
import { Button, ButtonSubType } from "../Button/Button"

import classes from "./SideBar.module.scss"

import exploreIcon from "./explore/icon.svg"
import exploreActiveIcon from "./explore/activeIcon.svg"

import profileIcon from "./profile/icon.svg"
import profileActiveIcon from "./profile/activeIcon.svg"

export const SideBar: FC = () => {
    return <aside className={ classes.common }>
        <Logo className={ classes.logo } />
        <SideBarLink
            to="/explore"
            iconSrc={ isActive => isActive ? exploreActiveIcon : exploreIcon }
        >
            Explore
        </SideBarLink>
        <SideBarLink
            to="/profile"
            iconSrc={ isActive => isActive ? profileActiveIcon : profileIcon }
        >
            Profile
        </SideBarLink>
        <Button className={ classes.button } subType={ ButtonSubType.PRIMARY }>
            Croaaaak
        </Button>
    </aside>
}