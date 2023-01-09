import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { v4 } from "uuid"
import { INotification } from "../../models/INotification"
import { INotificationContainer } from "../../models/INotificationContainer"

export interface INotificationsState {
    list: Array<INotification>
}

const initialState: INotificationsState = {
    list: []
}

const notificationsSlice = createSlice({
    name: "notifications",
    initialState,
    reducers: {
        appendNotificationContainer: (state, action: PayloadAction<INotificationContainer>): void => {
            state.list.push({...action.payload, id: v4()})
        },

        appendNotification: (state, action: PayloadAction<INotification>): void => {
            state.list.push(action.payload)
        },

        removeNotification: (state, action: PayloadAction<string>): void => {
            state.list = state.list.filter(notification => notification.id !== action.payload)
        }
    }
})

export const notificationsReducer = notificationsSlice.reducer

export const { appendNotificationContainer, appendNotification, removeNotification } = notificationsSlice.actions