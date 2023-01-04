import { FC } from "react"
import { ICroak } from "../../models/ICroak"

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
                <div className={ classes.username }>{ croak.author.username }</div>
                <time className={ classes.passedTime }>{ croak.creationDate }</time>
            </header>
            <div className={ classes.text }>{ croak.text }</div>
            <footer className={ classes.footer }>
                <button className={ classes.iconButton }>{ croak.likesCount }</button>
                <button className={ classes.iconButton }>{ croak.commentsCount }</button>
                <button className={ classes.iconButton }>{ croak.recroaksCount }</button>
            </footer>
        </div>
    </article>
}