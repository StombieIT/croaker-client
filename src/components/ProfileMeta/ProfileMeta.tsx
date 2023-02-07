import { FC } from "react"
import { useSelector } from "react-redux"
import { DateJson } from "../../models/DateJson"
import { formatDateToMonthAndYear } from "../../utils/formatDateToMonthAndYear"
import { SkeletonProfileMeta } from "./SkeletonProfileMeta"
import { selectProfileMeta } from "../../business-logic/profile/profileSelectors"
import classes from "./ProfileMeta.module.scss"
import locationIcon from "./locationIcon.svg"
import calendarIcon from "./calendarIcon.svg"

interface IProfileMetaProps {
    userId: number,
    city: string,
    country: string,
    registrationDate: DateJson
}

export const ProfileMeta: FC<IProfileMetaProps> = ({
    userId,
    city,
    country,
    registrationDate
}) => {
    return <div className={ classes.container }>
        <div className={ classes.element }>
            User id: <strong className={ classes.bold }>{ userId }</strong>
        </div>
        <div className={ classes.withIcon }>
            <img
                className={ classes.icon }
                src={ locationIcon }
                alt="Location icon"
            />
            <div>
                <strong className={ classes.bold }>{ country }</strong>, { city }
            </div>
        </div>
        <div className={ classes.withIcon }>
            <img
                className={ classes.icon }
                src={ calendarIcon }
                alt="Calendar icon"
            />
            <div>
                Member scince <strong className={ classes.bold }>{ formatDateToMonthAndYear(new Date(registrationDate)) }</strong>
            </div>
        </div>
    </div>
}

const ProfileMetaContainer: FC = () => {
    const profileMeta = useSelector(selectProfileMeta)
    
    if (!profileMeta) {
        return <SkeletonProfileMeta />
    }

    return <ProfileMeta
        {...profileMeta}
    />
}

export default ProfileMetaContainer