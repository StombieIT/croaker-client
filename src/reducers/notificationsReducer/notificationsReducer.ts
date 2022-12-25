import { AnyAction } from "@reduxjs/toolkit"
import { INotification } from "../../models/INotification"
import { INotificationContainer } from "../../models/INotificationContainer"
import { IPayloadAction } from "../../models/IPayloadAction"
import { v4 } from "uuid"

enum ActionType {
    ADD_NOTIFICATION
}

interface INotificationsState {
    list: Array<INotification>
}

const initialState: INotificationsState = {
    list: []
}

export const notificationsReducer = (state: INotificationsState = initialState, action: AnyAction): INotificationsState => {
    switch (action.type) {
        case ActionType.ADD_NOTIFICATION:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
    }
    return state
}

export const addNotification = (notificationContainer: INotificationContainer): IPayloadAction<ActionType.ADD_NOTIFICATION, INotification> => ({
    type: ActionType.ADD_NOTIFICATION,
    payload: {...notificationContainer, id: v4()}
})