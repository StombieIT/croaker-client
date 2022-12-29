import { AnyAction } from "@reduxjs/toolkit"
import { INotification } from "../../models/INotification"
import { INotificationContainer } from "../../models/INotificationContainer"
import { IPayloadAction } from "../../models/IPayloadAction"
import { v4 } from "uuid"

enum NotificationsStateActionType {
    ADD_NOTIFICATION = "ADD_NOTIFICATION",
    REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION"
}

interface INotificationsState {
    list: Array<INotification>
}

const initialState: INotificationsState = {
    list: []
}

export const notificationsReducer = (state: INotificationsState = initialState, action: AnyAction): INotificationsState => {
    switch (action.type) {
        case NotificationsStateActionType.ADD_NOTIFICATION:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case NotificationsStateActionType.REMOVE_NOTIFICATION:
            return {
                ...state,
                list: state.list.filter(notification => notification.id !== action.payload)
            }
    }
    return state
}

export const createAddNotificationAction = (notificationContainer: INotificationContainer): IPayloadAction<NotificationsStateActionType.ADD_NOTIFICATION, INotification> => ({
    type: NotificationsStateActionType.ADD_NOTIFICATION,
    payload: {...notificationContainer, id: v4()}
})

export const createRemoveNotificationAction = (notificationId: string): IPayloadAction<NotificationsStateActionType.REMOVE_NOTIFICATION, string> => ({
    type: NotificationsStateActionType.REMOVE_NOTIFICATION,
    payload: notificationId
})