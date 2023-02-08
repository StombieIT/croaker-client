import { FC } from "react"
import ProfileDescription from "../ProfileDescription/ProfileDescription"
import ProfileFollows from "../ProfileFollows/ProfileFollows"
import ProfileMeta from "../ProfileMeta/ProfileMeta"
import ProfileName from "../ProfileName/ProfileName"
import ProfileUsername from "../ProfileUsername/ProfileUsername"

import classes from "./ProfileInfo.module.scss"

export const ProfileInfo: FC = () => {
    return <div className={ classes.info }>
        <ProfileName />
        <ProfileUsername />
        <ProfileDescription />
        <ProfileMeta />
        <ProfileFollows />
    </div>
}