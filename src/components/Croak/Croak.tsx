import { FC } from "react"
import { ICroak } from "../../models/ICroak"
import { ActivitiesBar } from "../ActivitiesBar/ActivitiesBar"
import { MediaGrid } from "../MediaGrid/MediaGrid"
import { PassedTime } from "../PassedTime/PassedTime"

import classes from "./Croak.module.scss"

interface ICroakProps {
    croak: ICroak,
    onLikesClick?: () => void,
    onCommentsClick?: () => void,
    onRecroaksClick?: () => void
}

export const Croak: FC<ICroakProps> = ({
    croak,
    onLikesClick,
    onCommentsClick,
    onRecroaksClick
}) => {
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
            <MediaGrid className={ classes.imagesGrid }>
                {
                    croak.imagesLinks.map(imageLink => <img key={ imageLink.id } src={ imageLink.value } alt={ `${imageLink} image` } />)
                }
            </MediaGrid>
            <ActivitiesBar
                likes={ croak.likes }
                onLikesClick={ onLikesClick }
                comments={ croak.comments }
                onCommentsClick={ onCommentsClick }
                recroaks={ croak.recroaks }
                onRecroaksClick={ onRecroaksClick }
                className={ classes.activitiesBar }
                approximately
            />
        </div>
    </article>
}