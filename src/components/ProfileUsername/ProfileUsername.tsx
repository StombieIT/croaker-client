import { FC } from "react"
import { useSelector } from "react-redux"
import { selectProfileUser } from "../../business-logic/profile/profileSelectors"
import { SkeletonUsername } from "../Username/SkeletonUsername"
import { Username } from "../Username/Username"

interface IProfileUsernameProps {
    username: string
}

export const ProfileUsername: FC<IProfileUsernameProps> = ({username}) => {
    return <Username>
        { username }
    </Username>
}

const ProfileUsernameContainer: FC = () => {
    const profileUsername = useSelector(selectProfileUser)
    
    if (!profileUsername) {
        return <SkeletonUsername width={ 70 } height={ 15 } />
    }

    return <ProfileUsername
        {...profileUsername}
    />
}

export default ProfileUsernameContainer
