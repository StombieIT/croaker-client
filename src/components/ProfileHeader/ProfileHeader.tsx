import { FC, MouseEvent } from "react"
import { useNavigate } from "react-router-dom"

import classes from "./ProfileHeader.module.scss"
import backIcon from "./backIcon.svg"

interface IProfileHeaderContainerProps {
    name: string,
    croaksCount: number
}

interface IProfileHeaderProps extends IProfileHeaderContainerProps {
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

const ProfileHeaderContainer: FC<IProfileHeaderContainerProps> = props => {
    const navigate = useNavigate()

    return <ProfileHeader
        {...props}
        onBackButtonClick={ () => navigate(-1) }
    />
}

export default ProfileHeaderContainer