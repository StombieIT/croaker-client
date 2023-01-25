import { FC } from "react"
import { Login } from "../Login/Login"
import { Routes, Route, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectIsAuthorized } from "../../business-logic/auth/authSelectors"

import classes from "./Auth.module.scss"
import { Register } from "../Register/Register"

export const Auth: FC = () => {
    const isAuthorized: boolean = useSelector(selectIsAuthorized)

    if (isAuthorized) {
        return <Navigate to={-1 as any} replace />
    }

    return <div className={ classes.container }>
        <div className={ classes.content }>
            <Routes>
                <Route path="/login" element={ <Login /> } />
                <Route path="/register" element={ <Register /> } />
            </Routes>
        </div>
    </div>
}