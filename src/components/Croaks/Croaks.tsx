import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectCroaksState } from "../../business-logic/croaks/croaksSelectors"
import { fetchCroaks, ICroaksState } from "../../business-logic/croaks/croaksSlice"
import { AppDispatch } from "../../store"
import { Croak } from "../Croak/Croak"

interface ICroaksContainerProps {
}

interface ICroaksProps extends ICroaksContainerProps {
    state: ICroaksState
}

export const Croaks: FC<ICroaksProps> = ({state}) => {
    if (!state.paginator) {
        return null
    }
    
    return <>
        {
            state.paginator.items.map(croak => <Croak
                key={ croak.id }
                croak={ croak }
            />)
        }
    </>
}

const CroaksContainer: FC<ICroaksContainerProps> = ({}) => {
    const state = useSelector(selectCroaksState)
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCroaks(1))
    }, [])

    return <Croaks
        state={ state }
    />
}

export default CroaksContainer