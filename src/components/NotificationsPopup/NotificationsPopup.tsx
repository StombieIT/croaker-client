import { FC } from "react"
import { createPortal } from "react-dom"
import Notifications from "../Notifications/Notifications"

export const NotificationsPopup: FC = () => createPortal(
    <Notifications />,
    document.getElementById("notifications-popup") as HTMLElement
)