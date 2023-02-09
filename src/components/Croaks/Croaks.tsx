import { FC } from "react"
import { selectCroaksState } from "../../business-logic/croaks/croaksSelectors"
import { fetchNextCroaksByUserId, ICroaksState, tearDown } from "../../business-logic/croaks/croaksSlice"
import { croaksContainer } from "../../hocs/croaksContainer"
import { SkeletonReplyingCroak } from "../ReplyingCroak/SkeletonReplyingCroak"
import { ReplyingCroak } from "../ReplyingCroak/ReplyingCroak"

import classes from "./Croaks.module.scss"

export interface ICroaksProps {
    state: ICroaksState
}

export const Croaks: FC<ICroaksProps> = ({state}) => {
    return <div className={ classes.container }>
        {
            state.paginator
            ? state.paginator.items.map(croak => <ReplyingCroak key={ croak.id } croak={ croak } />)
            : null
        }
        {
            state.isLoading || !state.paginator
            ? Array.from({length: 3})
                .map((element, idx) => <SkeletonReplyingCroak key={ idx } />)
            : null
        }
    </div>
}

const CroaksContainer: FC = croaksContainer(
    selectCroaksState,
    fetchNextCroaksByUserId,
    tearDown
)(Croaks)

export default CroaksContainer