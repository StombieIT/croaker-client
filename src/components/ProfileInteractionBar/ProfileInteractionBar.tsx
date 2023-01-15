import { FC } from "react"
import { IUser } from "../../models/IUser"
import { Avatar } from "../Avatar/Avatar"
import { Button, ButtonSubType } from "../Button/Button"

import classes from "./ProfileInteractionBar.module.scss"

interface IProfileInteractionBarProps {
    user: IUser
}

export const ProfileInteractionBar: FC<IProfileInteractionBarProps> = ({user}) => {
    return <div className={ classes.bar }>
        <Avatar
            className={ classes.avatar }
            src={ user.avatarLink ?? undefined }
            alt={ `${user.username} avatar` }
        />
        <Button className={ classes.button } subType={ ButtonSubType.PRIMARY }>
            Follow
        </Button>
    </div>
}