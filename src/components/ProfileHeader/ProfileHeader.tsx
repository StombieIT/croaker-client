import { FC } from "react"

import classes from "./ProfileHeader.module.scss"
import backIcon from "./backIcon.svg"

interface IProfileHeaderProps {
    name: string,
    croaksCount: number
}

export const ProfileHeader: FC<IProfileHeaderProps> = ({name, croaksCount}) => {
    return <header className={ classes.header }>
        <button className={ classes.backButton }>
            <img
                src={ backIcon }
                alt="Back"
            />
        </button>
        <h4 className={ classes.name }>{ name }</h4>
        <div className={ classes.croaksCount }>{ croaksCount } croaks</div>
    </header>
}