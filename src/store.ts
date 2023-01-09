import { configureStore } from "@reduxjs/toolkit"
import { croaksReducer } from "./reducers/croaks/croaksReducer"
import { notificationsReducer } from "./reducers/notifications/notificationsReducer"

export const store = configureStore({
    reducer: {
        notifications: notificationsReducer,
        croaks: croaksReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch