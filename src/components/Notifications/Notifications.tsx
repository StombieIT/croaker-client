import { Dispatch } from "@reduxjs/toolkit"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { INotification } from "../../models/INotification"
import { removeNotification } from "../../business-logic/notifications/notificationsSlice"
import { selectNotificationsList } from "../../business-logic/notifications/notificationsSelectors"
import { Notification } from "../Notification/Notification"

import classes from "./Notifications.module.css"

interface INotificationContainerProps {
}

interface INotificationsProps extends INotificationContainerProps {
    list: Array<INotification>,
    removeNotification: (id: string) => void
}

export const Notifications: FC<INotificationsProps> = ({list, removeNotification}) => {
    if (!list.length) {
        return null
    }
    return <ul className={ classes.list }>
        {
            list.map(notification => <Notification
                key={ notification.id }
                notification={ notification }
                onClose={() => removeNotification(notification.id)}
            />)
        }
    </ul>
}

const NotificationsContainer: FC<INotificationContainerProps> = ({}) => {
    const notificationsList: Array<INotification> = useSelector(selectNotificationsList)
    const dispatch: Dispatch = useDispatch()

    return <Notifications
        list={ notificationsList }
        removeNotification={ (id: string) => dispatch(removeNotification(id)) }
    />
}

export default NotificationsContainer