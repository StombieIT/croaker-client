import { FC } from "react"
import { ICroak } from "../../models/ICroak"
import { ActivitiesBar } from "../ActivitiesBar/ActivitiesBar"
import { PassedTime } from "../PassedTime/PassedTime"

import classes from "./Croak.module.scss"

interface ICroakProps {
    croak: ICroak
}

export const Croak: FC<ICroakProps> = ({croak}) => {
    return <article className={ classes.container }>
        <div className={ classes.avatarWrapper }>
            <img
                className={ classes.avatar }
                src={ croak.author.avatarLink ?? undefined }
                alt={`${croak.author.username} avatar`}
            />
        </div>
        <div className={ classes.content }>
            <header className={ classes.header }>
                <h4 className={ classes.name }>{ croak.author.name }</h4>
                <div className={ classes.username }>@{ croak.author.username }</div>
                <PassedTime className={ classes.passedTime }>{ croak.creationDate }</PassedTime>
            </header>
            <div className={ classes.text }>{ croak.text }</div>
            <ActivitiesBar
                likes={ croak.likes }
                comments={ croak.comments }
                recroaks={ croak.recroaks }
                className={ classes.activitiesBar }
                approximately
            />
        </div>
    </article>
}