import { FC } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { SideBar } from "../SideBar/SideBar"
import { NarrowColumn } from "../NarrowColumn/NarrowColumn"
import Profile from "../Profile/Profile"
import ErrorBanner from "../ErrorBanner/ErrorBanner"
import LoginForm from "../LoginForm/LoginForm"

import classes from "./App.module.css"

export const App: FC = () => {
    return <div className={ classes.common }>
        <SideBar />
        <Routes>
            <Route path="/profile/:id*" element={ <Profile /> } />
            <Route path="/error/:heading" element={ <ErrorBanner /> } />
            <Route path="/login-form" element={ <LoginForm /> } />
            <Route path="/*" element={ <Navigate to="/error/404" /> } />
        </Routes>
        <NarrowColumn />
    </div>
}