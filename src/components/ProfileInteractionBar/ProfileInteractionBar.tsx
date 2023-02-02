import { FC } from "react"
import { useDispatch } from "react-redux"
import { toggleProfileFollowIsActive } from "../../business-logic/profile/profileSlice"
import { IActivable } from "../../models/IActivable"
import { ILoadable } from "../../models/ILoadable"
import { IUser } from "../../models/IUser"
import { AppDispatch } from "../../store"
import { Avatar } from "../Avatar/Avatar"
import { Button, ButtonSubType } from "../Button/Button"

import classes from "./ProfileInteractionBar.module.scss"

interface IProfileInteractionBarContainerProps {
    user: IUser,
    follow: ILoadable & IActivable
}

interface IProfileInteractionBarProps extends IProfileInteractionBarContainerProps {
    toggleFollowIsActive: () => void
}

export const ProfileInteractionBar: FC<IProfileInteractionBarProps> = ({user, follow, toggleFollowIsActive}) => {
    return <div className={ classes.bar }>
        <Avatar
            className={ classes.avatar }
            src={ user.avatarLink ?? undefined }
            alt={ `${user.username} avatar` }
        />
        <Button
            className={ classes.button }
            subType={ ButtonSubType.PRIMARY }
            disabled={ follow.isLoading }
            onClick={ toggleFollowIsActive }
        >
            {
                follow.isActive
                ? "Unfollow"
                : "Follow"
            }
        </Button>
    </div>
}

export const ProfileInteractionBarContainer: FC<IProfileInteractionBarContainerProps> = props => {
    const dispatch: AppDispatch = useDispatch()

    return <ProfileInteractionBar
        {...props}
        toggleFollowIsActive={ () => dispatch(toggleProfileFollowIsActive()) }
    />
}

export default ProfileInteractionBarContainer