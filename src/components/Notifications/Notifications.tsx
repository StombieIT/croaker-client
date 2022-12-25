import { FC } from "react"
import { useSelector } from "react-redux"
import { INotification } from "../../models/INotification"
import { selectNotificationsList } from "../../reducers/notificationsReducer/notificationsSelectors"
import { Notification } from "../Notification/Notification"

interface INotificationContainerProps {
}

interface INotificationsProps extends INotificationContainerProps {
    list: Array<INotification>
}

export const Notifications: FC<INotificationsProps> = ({list}) => {
    if (!list.length) {
        return null
    }
    return <ul>
        {
            list.map(notification => <Notification notification={notification} />)
        }
    </ul>
}

const NotificationsContainer: FC<INotificationContainerProps> = ({}) => {
    const notificationsList: Array<INotification> = useSelector(selectNotificationsList)

    return <Notifications list={notificationsList} />
}

export default NotificationsContainer