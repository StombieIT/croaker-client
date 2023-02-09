import { FC, MouseEvent, useEffect } from "react"
import { INotificationContainer } from "../../models/INotificationContainer"
import classNames from "classnames"
import closeIcon from "./closeIcon.svg"

import classes from "./Notification.module.css"

interface INotificationProps {
    notification: INotificationContainer,
    onClose: () => void
}

export const Notification: FC<INotificationProps> = ({notification, onClose}) => {
    
    useEffect(() => {
        const notificationTimeout = notification.lifetime
            ? setTimeout(onClose, notification.lifetime)
            : undefined

        return () => {
            if (notificationTimeout) {
                clearTimeout(notificationTimeout)
            }
        }
    }, [notification.lifetime])
    
    const notificationClass: string = classNames(classes.common, classes[notification.type])

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