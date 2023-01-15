import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { croaksReducer } from "./business-logic/croaks/croaksSlice"
import { notificationsReducer } from "./business-logic/notifications/notificationsSlice"
import { profileReducer } from "./business-logic/profile/profileSlice"
import { rootSaga } from "./business-logic/rootSaga"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        notifications: notificationsReducer,
        croaks: croaksReducer,
        profile: profileReducer
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware({thunk: false}),
        sagaMiddleware
    ]
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch