import { FC } from "react"
import { ICroak } from "../../models/ICroak"
import { IActivable } from "../../models/IActivable"
import { IIdentifiable } from "../../models/IIdentifiable"
import OriginalCroak from "../OriginalCroak/OriginalCroak"

import replyIcon from "./replyIcon.svg"
import classes from "./ReplyingTo.module.scss"

interface IReplyingToProps {
    originalCroak: Partial<ICroak> & IActivable & IIdentifiable
    setOriginalCroakIsActive: (isActive: boolean) => void
}

export const ReplyingTo: FC<IReplyingToProps> = ({originalCroak, setOriginalCroakIsActive}) => {
    return <div
        className={ classes.wrapper }
        onMouseEnter={ evt => setOriginalCroakIsActive(true) }
        onMouseLeave={ evt => setOriginalCroakIsActive(false) }
    >
        <h5 className={ classes.heading }>
            <img
                className={ classes.replyIcon }
                src={ replyIcon }
                alt="Reply icon"
            />
            replying to
        </h5>
        {
            originalCroak.isActive
            ? <OriginalCroak
                originalCroak={ originalCroak }
            />
            : null
        }
    </div>
}