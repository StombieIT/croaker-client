import { FC } from "react"
import { selectCroaksState } from "../../business-logic/croaks/croaksSelectors"
import { fetchNextCroaksByUserId, ICroaksState, tearDown } from "../../business-logic/croaks/croaksSlice"
import { croaksContainer } from "../../hocs/croaksContainer"
import { Croak } from "../Croak/Croak"
import { PreLoader } from "../PreLoader/PreLoader"

import classes from "./Croaks.module.scss"

export interface ICroaksProps {
    state: ICroaksState
}

export const Croaks: FC<ICroaksProps> = ({state}) => {
    if (state.isLoading || !state.paginator) {
        return <PreLoader />
    }
    
    return <div className={ classes.container }>
        {
            state.paginator.items.map(croak => <Croak
                key={ croak.id }
                croak={ croak }
            />)
        }
    </div>
}

const CroaksContainer: FC = croaksContainer(
    selectCroaksState,
    fetchNextCroaksByUserId,
    tearDown
)(Croaks)

export default CroaksContainer