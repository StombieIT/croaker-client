import { FC } from "react"
import { createPortal } from "react-dom"
import Notifications from "../Notifications/Notifications"

export const Modal: FC = () => createPortal(
    <Notifications />,
    document.getElementById("modal") as HTMLElement
)