import { FC } from "react"
import { useDispatch } from "react-redux"
import { toggleLikesIsActiveByCroakId } from "../../business-logic/croaks/croaksSlice"
import { AppDispatch } from "../../store"
import { ICroak } from "../../models/ICroak"
import { ReactionsBar } from "../ReactionsBar/ReactionsBar"
import { MediaGrid } from "../MediaGrid/MediaGrid"
import { PassedTime } from "../PassedTime/PassedTime"
import { Username } from "../Username/Username"
import { Avatar } from "../Avatar/Avatar"

import classes from "./Croak.module.scss"

interface ICroakContainerProps {
    croak: ICroak
}

export interface ICroakProps extends ICroakContainerProps {
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
        <Avatar
            className={ classes.avatarWrapper }
            src={ croak.author.avatarLink ?? undefined }
            alt={ `${croak.author.username} avatar` }
        />
        <div className={ classes.content }>
            <header className={ classes.header }>
                <h4 className={ classes.name }>{ croak.author.name }</h4>
                <Username className={ classes.username }>{ croak.author.username }</Username>
                <PassedTime className={ classes.passedTime }>{ croak.creationDate }</PassedTime>
            </header>
            <div className={ classes.text }>{ croak.text }</div>
            <MediaGrid className={ classes.imagesGrid }>
                {
                    croak.imagesLinks.map(imageLink => <img key={ imageLink } src={ imageLink } alt={ `${imageLink} image` } />)
                }
            </MediaGrid>
            <ReactionsBar
                likes={ croak.likes }
                onLikesClick={ onLikesClick }
                comments={ croak.comments }
                onCommentsClick={ onCommentsClick }
                replies={ croak.replies }
                onRepliesClick={ onRecroaksClick }
                className={ classes.reactionsBar }
                approximately
            />
        </div>
    </article>
}

const CroakContainer: FC<ICroakContainerProps> = props => {
    const dispatch: AppDispatch = useDispatch()
    
    return <Croak
        {...props}
        onLikesClick={ () => dispatch(toggleLikesIsActiveByCroakId(props.croak.id)) }
    />
}

export default CroakContainer