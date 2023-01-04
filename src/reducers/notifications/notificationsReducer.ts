import { AnyAction } from "@reduxjs/toolkit"
import { INotification } from "../../models/INotification"
import { INotificationContainer } from "../../models/INotificationContainer"
import { IPayloadAction } from "../../models/IPayloadAction"
import { v4 } from "uuid"

enum NotificationsStateActionType {
    APPEND_NOTIFICATION = "APPEND_NOTIFICATION",
    REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION"
}

export interface INotificationsState {
    list: Array<INotification>
}

const initialState: INotificationsState = {
    list: []
}

export const notificationsReducer = (state: INotificationsState = initialState, action: AnyAction): INotificationsState => {
    switch (action.type) {
        case NotificationsStateActionType.APPEND_NOTIFICATION:
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

export const createAppendNotificationAction = (notificationContainer: INotificationContainer): IPayloadAction<NotificationsStateActionType.APPEND_NOTIFICATION, INotification> => ({
    type: NotificationsStateActionType.APPEND_NOTIFICATION,
    payload: {...notificationContainer, id: v4()}
})

export const createRemoveNotificationAction = (notificationId: string): IPayloadAction<NotificationsStateActionType.REMOVE_NOTIFICATION, string> => ({
    type: NotificationsStateActionType.REMOVE_NOTIFICATION,
    payload: notificationId
})