import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { apllyDispatch } from "./api/api"
import { authReducer } from "./business-logic/auth/authSlice"
import { croaksReducer } from "./business-logic/croaks/croaksSlice"
import { loginFormReducer } from "./business-logic/loginForm/loginFormSlice"
import { notificationsReducer } from "./business-logic/notifications/notificationsSlice"
import { profileReducer } from "./business-logic/profile/profileSlice"
import { rootSaga } from "./business-logic/rootSaga"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        notifications: notificationsReducer,
        croaks: croaksReducer,
        profile: profileReducer,
        auth: authReducer,
        loginForm: loginFormReducer
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware({thunk: false}),
        sagaMiddleware
    ]
})

sagaMiddleware.run(rootSaga)
apllyDispatch(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch