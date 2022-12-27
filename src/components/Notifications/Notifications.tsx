import { Dispatch } from "@reduxjs/toolkit"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { INotification } from "../../models/INotification"
import { createRemoveNotificationAction } from "../../reducers/notifications/notificationsReducer"
import { selectNotificationsList } from "../../reducers/notifications/notificationsSelectors"
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

    const removeNotification = (id: string) => dispatch(createRemoveNotificationAction(id))

    return <Notifications
        list={ notificationsList }
        removeNotification={ removeNotification }
    />
}

export default NotificationsContainer