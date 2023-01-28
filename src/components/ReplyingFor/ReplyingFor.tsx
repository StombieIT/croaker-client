import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectOriginalCroakOfCroakById } from "../../business-logic/croaks/croaksSelectors"
import { setOriginalCroakIsActive } from "../../business-logic/croaks/croaksSlice"
import { IActivable } from "../../models/IActivable"
import { ICroak } from "../../models/ICroak"
import { IIdentifiable } from "../../models/IIdentifiable"
import { AppDispatch } from "../../store"
import { ReplyingTo } from "../ReplyingTo/ReplyingTo"

interface IReplyingForContainerProps {
    croakId: number
}

const ReplyingForContainer: FC<IReplyingForContainerProps> = ({croakId}) => {
    const originalCroak: Partial<ICroak> & IActivable & IIdentifiable | undefined
        = useSelector(selectOriginalCroakOfCroakById(croakId))
    const dispatch: AppDispatch = useDispatch()

    if (!originalCroak) {
        return null
    }

    return <ReplyingTo
        originalCroak={ originalCroak }
        setOriginalCroakIsActive={ isActive => dispatch(setOriginalCroakIsActive({croakId, isActive})) }
    />
}

export default ReplyingForContainer