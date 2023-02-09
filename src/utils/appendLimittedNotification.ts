import { INotification } from "../models/INotification"
import { WritableDraft } from "immer/dist/internal"
import { NotificationType } from "../models/NotificationType"
import { Lifetime } from "../models/Lifetime"

export const appendLimittedNotification = (list: WritableDraft<Array<INotification>>, notification: INotification): void => {
    switch (notification.type) {
        case NotificationType.SUCCESS:
            list.push({...notification, lifetime: Lifetime.SHORT})
            return
        case NotificationType.INFO:
            list.push({...notification, lifetime: Lifetime.MEDIUM})
            return
        default:
            list.push({...notification, lifetime: Lifetime.LONG})
    }
}