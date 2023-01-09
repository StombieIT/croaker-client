import { configureStore } from "@reduxjs/toolkit"
import { croaksReducer } from "./business-logic/croaks/croaksSlice"
import { notificationsReducer } from "./business-logic/notifications/notificationsSlice"

export const store = configureStore({
    reducer: {
        notifications: notificationsReducer,
        croaks: croaksReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch