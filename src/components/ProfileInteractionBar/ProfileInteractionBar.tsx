import { FC, MouseEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectProfileInteractive } from "../../business-logic/profile/profileSelectors"
import { toggleProfileFollowIsActive } from "../../business-logic/profile/profileSlice"
import { IActivable } from "../../models/IActivable"
import { ILoadable } from "../../models/ILoadable"
import { AppDispatch } from "../../store"
import { Avatar } from "../Avatar/Avatar"
import { Button, ButtonSubType } from "../Button/Button"
import { SkeletonProfileInteractionBar } from "./SkeletonProfileInteractionBar"

import classes from "./ProfileInteractionBar.module.scss"

interface IProfileInteractionBarProps {
    username: string,
    avatarLink: string | null,
    follow: ILoadable & IActivable,
    toggleFollowIsActive?: () => void
}

export const ProfileInteractionBar: FC<IProfileInteractionBarProps> = ({username, avatarLink, follow, toggleFollowIsActive}) => {
    const onButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault()
        if (toggleFollowIsActive) {
            toggleFollowIsActive()
        }
    }
    
    return <div className={ classes.bar }>
        <Avatar
            className={ classes.avatar }
            src={ avatarLink ?? undefined }
            alt={ `${username} avatar` }
        />
        <Button
            className={ classes.button }
            subType={ ButtonSubType.PRIMARY }
            disabled={ follow.isLoading }
            onClick={ onButtonClick }
        >
            {
                follow.isActive
                ? "Unfollow"
                : "Follow"
            }
        </Button>
    </div>
}

export const ProfileInteractionBarContainer: FC = () => {
    const dispatch: AppDispatch = useDispatch()
    const profileInteractive = useSelector(selectProfileInteractive)

    if (!profileInteractive) {
        return <SkeletonProfileInteractionBar />
    }

    return <ProfileInteractionBar
        {...profileInteractive}
        toggleFollowIsActive={ () => dispatch(toggleProfileFollowIsActive()) }
    />
}

export default ProfileInteractionBarContainer