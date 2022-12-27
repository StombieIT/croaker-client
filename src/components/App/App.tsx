import { FC, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { NotificationType } from "../../models/NotificationType"
import { createAddNotificationAction } from "../../reducers/notificationsReducer/notificationsReducer"
import { Modal } from "../Modal/Modal"

export const App: FC = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState<string>("")
    const [type, setType] = useState<NotificationType>(NotificationType.INFO)

    const add = () => dispatch(createAddNotificationAction({text, type}))

    return <div>
        <input value={ text } onChange={ evt => setText(evt.target.value) } />
        <input name="ficko" type="radio" value={NotificationType.INFO} onChange={ evt => setType(evt.target.value as NotificationType) } />
        <input name="ficko" type="radio" value={NotificationType.SUCCESS} onChange={ evt => setType(evt.target.value as NotificationType) } />
        <input name="ficko" type="radio" value={NotificationType.ERROR} onChange={ evt => setType(evt.target.value as NotificationType) } />
        <button onClick={add}>Click</button>
        <Modal />
    </div>
}