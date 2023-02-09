import { FC } from "react"
import { useSelector } from "react-redux"
import { selectProfileName } from "../../business-logic/profile/profileSelectors"

import classes from "./ProfileName.module.css"
import { SkeletonProfileName } from "./SkeletonProfileName"

interface IProfileNameProps {
    name: string
}

export const ProfileName: FC<IProfileNameProps> = ({name}) => {
    return <h4 className={ classes.name }>
        { name }
    </h4>
}

export const ProfileNameContainer: FC = () => {
    const profileName = useSelector(selectProfileName)

    if (!profileName) {
        return <SkeletonProfileName />
    }

    return <ProfileName
        {...profileName}
    />
}

export default ProfileNameContainer
