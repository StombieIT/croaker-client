import { FC, useEffect } from "react"
import { ICroak, isICroak } from "../../models/ICroak"
import { IIdentifiable } from "../../models/IIdentifiable"
import { PreLoader } from "../PreLoader/PreLoader"
import { Croak } from "../Croak/Croak"
import { AppDispatch } from "../../store"
import { fetchOriginalCroakById } from "../../business-logic/croaks/croaksSlice"
import { useDispatch } from "react-redux"

import classes from "./OriginalCroak.module.scss"

interface IOriginalCroakContainerProps {
    originalCroak: Partial<ICroak>  & IIdentifiable
}

interface IOriginalCroakProps extends IOriginalCroakContainerProps {
    onLikesClick?: () => void,
    onCommentsClick?: () => void,
    onRepliesClick?: () => void
}

export const OriginalCroak: FC<IOriginalCroakProps> = ({originalCroak, ...props}) => {    
    return <div className={ classes.container }>
        {
            isICroak(originalCroak)
            ? <Croak
                {...props}
                croak={ originalCroak }
            />
            : <PreLoader />
        }
    </div>
}

const OriginalCroakContainer: FC<IOriginalCroakContainerProps> = ({originalCroak}) => {
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        if (!isICroak(originalCroak)) {
            dispatch(fetchOriginalCroakById(originalCroak.id))
        }
    }, [originalCroak])

    return <OriginalCroak
        originalCroak={ originalCroak }
    />
}

export default OriginalCroakContainer