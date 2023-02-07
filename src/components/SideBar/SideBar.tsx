import { FC } from "react"
import { useSelector } from "react-redux"
import { SideBarLink } from "../SideBarLink/SideBarLink"
import { Logo } from "../Logo/Logo"
import { Button, ButtonSubType } from "../Button/Button"
import { selectAuthUserId } from "../../business-logic/auth/authSelectors"

import classes from "./SideBar.module.scss"

import exploreIcon from "./explore/icon.svg"
import exploreActiveIcon from "./explore/activeIcon.svg"

import profileIcon from "./profile/icon.svg"
import profileActiveIcon from "./profile/activeIcon.svg"

interface ISideBarProps {
    userId?: number
}

export const SideBar: FC<ISideBarProps> = ({userId}) => {
    return <aside className={ classes.common }>
        <Logo className={ classes.logo } />
        <SideBarLink
            to="/explore"
            iconSrc={ isActive => isActive ? exploreActiveIcon : exploreIcon }
        >
            Explore
        </SideBarLink>
        <SideBarLink
            to={`/profile${userId ? `/${userId}/croaks` : ""}`}
            iconSrc={ isActive => isActive ? profileActiveIcon : profileIcon }
        >
            Profile
        </SideBarLink>
        <Button className={ classes.button } subType={ ButtonSubType.PRIMARY }>
            Croaaaak
        </Button>
    </aside>
}

const SideBarContainer: FC = () => {
    const userId: number | undefined = useSelector(selectAuthUserId)
    
    return <SideBar
        userId={ userId }
    />
}

export default SideBarContainer