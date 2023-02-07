import { FC, MouseEvent } from "react"
import { useNavigate } from "react-router-dom"
import { SkeletonProfileHeader } from "./SkeletonProfileHeader"
import { useSelector } from "react-redux"
import { selectProfileHeader } from "../../business-logic/profile/profileSelectors"

import classes from "./ProfileHeader.module.scss"
import backIcon from "./backIcon.svg"

interface IProfileHeaderProps {
    name: string,
    croaksCount: number,
    onBackButtonClick: () => void
}

export const ProfileHeader: FC<IProfileHeaderProps> = ({name, croaksCount, onBackButtonClick}) => {
    const onButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault()
        onBackButtonClick()
    }
    
    return <header className={ classes.header }>
        <button className={ classes.backButton } onClick={ onButtonClick }>
            <img
                src={ backIcon }
                alt="Back"
            />
        </button>
        <h4 className={ classes.name }>{ name }</h4>
        <div className={ classes.croaksCount }>{ croaksCount } croaks</div>
    </header>
}

const ProfileHeaderContainer: FC = props => {
    const navigate = useNavigate()
    const profileHeader = useSelector(selectProfileHeader)

    if (!profileHeader) {
        return <SkeletonProfileHeader />
    }

    return <ProfileHeader
        {...profileHeader}
        onBackButtonClick={ () => navigate(-1) }
    />
}

export default ProfileHeaderContainer