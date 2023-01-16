import { FC } from "react"

import { DateJson } from "../../models/DateJson"

import classes from "./ProfileMeta.module.scss"
import locationIcon from "./locationIcon.svg"
import calendarIcon from "./calendarIcon.svg"
import { formatDateToMonthAndYear } from "../../utils/formatDateToMonthAndYear"

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
            User id: <b className={ classes.bold }>{ userId }</b>
        </div>
        <div className={ classes.withIcon }>
            <img
                className={ classes.icon }
                src={ locationIcon }
                alt="Location icon"
            />
            <div>
                <b className={ classes.bold }>{ country }</b>, { city }
            </div>
        </div>
        <div className={ classes.withIcon }>
            <img
                className={ classes.icon }
                src={ calendarIcon }
                alt="Calendar icon"
            />
            <div>
                Member scince <b className={ classes.bold }>{ formatDateToMonthAndYear(new Date(registrationDate)) }</b>
            </div>
        </div>
    </div>
}