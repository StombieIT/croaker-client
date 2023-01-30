import { FC } from "react"
import { selectCroaksState } from "../../business-logic/croaks/croaksSelectors"
import { fetchNextLikesByUserId, tearDown } from "../../business-logic/croaks/croaksSlice"
import { croaksContainer } from "../../hocs/croaksContainer"
import { Croaks } from "../Croaks/Croaks"

const LikesContainer: FC = croaksContainer(
    selectCroaksState,
    fetchNextLikesByUserId,
    tearDown
)(Croaks)

export default LikesContainer