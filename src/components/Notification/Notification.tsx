import { FC } from "react"
import { INotification } from "../../models/INotification"

interface INotificationProps {
    notification: INotification
}

export const Notification: FC<INotificationProps> = ({notification}) => {
    return <li key={notification.id}>
        { notification.text }
    </li>
}