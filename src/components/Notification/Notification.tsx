import { FC, MouseEvent } from "react"
import { INotificationContainer } from "../../models/INotificationContainer"
import classNames from "classnames"

import classes from "./Notification.module.css"
import closeIcon from "./closeIcon.svg"

interface INotificationProps {
    notification: INotificationContainer,
    onClose: () => void
}

export const Notification: FC<INotificationProps> = ({notification, onClose}) => {
    const notificationClass: string = classNames({
        [classes.common]: classes.common,
        [classes[notification.type]]: classes[notification.type]
    })

    const onButtonClick = (evt: MouseEvent<HTMLButtonElement>): void => {
        evt.preventDefault()
        onClose()
    }
    
    return <li className={ notificationClass }>
        <div className={ classes.textContainer }>{ notification.text }</div>
        <button className={ classes.closeButton } onClick={ onButtonClick }>
            <img className={ classes.closeIcon } src={ closeIcon } alt="Close" />
        </button>
    </li>
}