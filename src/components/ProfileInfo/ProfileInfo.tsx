import { FC } from "react"
import { IProfile } from "../../models/IProfile"
import ProfileDescription from "../ProfileDescription/ProfileDescription"
import ProfileFollows from "../ProfileFollows/ProfileFollows"
import ProfileMeta from "../ProfileMeta/ProfileMeta"
import ProfileUsername from "../ProfileUsername/ProfileUsername"
import { Username } from "../Username/Username"

import classes from "./ProfileInfo.module.scss"

interface IProfileInfoProps {
    profile: IProfile
}

export const ProfileInfo: FC<IProfileInfoProps> = ({profile}) => {
    return <div className={ classes.info }>
        <h4 className={ classes.name }>
            { profile.user.name }
        </h4>
        <ProfileUsername />
        <ProfileDescription />
        <ProfileMeta />
        <ProfileFollows />
    </div>
}