import { FC } from "react"
import { Routes, Route } from "react-router-dom"
import { SideBar } from "../SideBar/SideBar"
import { NarrowColumn } from "../NarrowColumn/NarrowColumn"
import Profile from "../Profile/Profile"

import classes from "./App.module.css"

export const App: FC = () => {
    return <div className={ classes.common }>
        <SideBar />
        <Routes>
            <Route path="/profile/*" element={ <Profile /> } />
        </Routes>
        <NarrowColumn />
    </div>
}