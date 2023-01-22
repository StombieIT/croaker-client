import { FC } from "react"
import { IProfile } from "../../models/IProfile"
import { OrdinaryParagraph } from "../OrdinaryParagraph/OrdinaryParagraph"
import { ProfileFollows } from "../ProfileFollows/ProfileFollows"
import { ProfileMeta } from "../ProfileMeta/ProfileMeta"
import { Username } from "../Username/Username"

import classes from "./ProfileInfo.module.scss"

interface IProfileInfoProps {
    profile: IProfile
}

export const ProfileUserInfo: FC<IProfileInfoProps> = ({profile}) => {
    return <div className={ classes.info }>
        <h4 className={ classes.name }>
            { profile.user.name }
        </h4>
        <Username>
            { profile.user.username }
        </Username>
        <OrdinaryParagraph>
            { profile.description ?? undefined }
        </OrdinaryParagraph>
        <ProfileMeta
            userId={ profile.user.id }
            city={ profile.city }
            country={ profile.country }
            registrationDate={ profile.user.registrationDate }
        />
        <ProfileFollows
            followersCount={ profile.followersCount }
            followingCount={ profile.followingCount }
        />
    </div>
}