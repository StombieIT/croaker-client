import { FC } from "react"
import { selectCroaksState } from "../../business-logic/croaks/croaksSelectors"
import { fetchNextCroaksByUserId, tearDown } from "../../business-logic/croaks/croaksSlice"
import { croaksContainer } from "../../hocs/croaksContainer"
import { Croaks } from "../Croaks/Croaks"

const RepliesContainer: FC = croaksContainer(
    selectCroaksState,
    // Need to fix this
    fetchNextCroaksByUserId,
    tearDown
)(Croaks)

export default RepliesContainer