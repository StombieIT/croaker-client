import { AnyAction } from "@reduxjs/toolkit"
import { INotification } from "../../models/INotification"
import { INotificationContainer } from "../../models/INotificationContainer"
import { IPayloadAction } from "../../models/IPayloadAction"
import { v4 } from "uuid"

enum NotificationsReducerActionType {
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
        case NotificationsReducerActionType.APPEND_NOTIFICATION:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case NotificationsReducerActionType.REMOVE_NOTIFICATION:
            return {
                ...state,
                list: state.list.filter(notification => notification.id !== action.payload)
            }
    }
    return state
}

export const createAppendNotificationAction = (notificationContainer: INotificationContainer): IPayloadAction<NotificationsReducerActionType.APPEND_NOTIFICATION, INotification> => ({
    type: NotificationsReducerActionType.APPEND_NOTIFICATION,
    payload: {...notificationContainer, id: v4()}
})

export const createRemoveNotificationAction = (notificationId: string): IPayloadAction<NotificationsReducerActionType.REMOVE_NOTIFICATION, string> => ({
    type: NotificationsReducerActionType.REMOVE_NOTIFICATION,
    payload: notificationId
})