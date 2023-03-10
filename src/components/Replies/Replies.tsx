import { FC } from "react"
import { selectCroaksState } from "../../business-logic/croaks/croaksSelectors"
import { fetchNextRepliesByUserId, tearDown } from "../../business-logic/croaks/croaksSlice"
import { croaksContainer } from "../../hocs/croaksContainer"
import { Croaks } from "../Croaks/Croaks"

const RepliesContainer: FC = croaksContainer(
    selectCroaksState,
    fetchNextRepliesByUserId,
    tearDown
)(Croaks)

export default RepliesContainer