import { INotification } from "../../models/INotification"
import { RootState } from "../../store"

export const selectNotificationsList = (state: RootState): Array<INotification> => state.notifications.list