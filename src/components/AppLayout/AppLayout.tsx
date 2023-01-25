import { FC } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { SideBar } from "../SideBar/SideBar"
import { NarrowColumn } from "../NarrowColumn/NarrowColumn"

import classes from "./AppLayout.module.scss"

export const AppLayout: FC = () => {
    return <div className={ classes.container }>
        <SideBar />
        <Outlet />
        <NarrowColumn />
    </div>
}