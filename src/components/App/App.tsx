import { FC } from "react"
import { useDispatch } from "react-redux"
import { NotificationType } from "../../models/NotificationType"
import { addNotification } from "../../reducers/notificationsReducer/notificationsReducer"
import { Modal } from "../Modal/Modal"

export const App: FC = () => {
    const dispatch = useDispatch()

    const add = () => dispatch(addNotification({text: "awdwad", type: NotificationType.INFO}))

    return <div>
        <button onClick={add}>Click</button>
        <Modal />
    </div>
}