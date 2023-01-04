import { FC } from "react"
import { SideBar } from "../SideBar/SideBar"
import { Profile } from "../Profile/Profile"
import { NarrowColumn } from "../NarrowColumn/NarrowColumn"

import classes from "./App.module.css"

export const App: FC = () => {
    return <div className={ classes.common }>
        <SideBar />
        <Profile />
        <NarrowColumn />
    </div>
}