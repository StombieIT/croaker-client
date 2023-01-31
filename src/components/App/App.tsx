import { FC, useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { AppLayout } from "../AppLayout/AppLayout"
import { AppDispatch } from "../../store"
import { useDispatch } from "react-redux"
import { fetchUserByAuth } from "../../business-logic/auth/authSlice"
import ProfileLayout from "../ProfileLayout/ProfileLayout"
import ErrorBanner from "../ErrorBanner/ErrorBanner"
import AuthRequired from "../AuthRequired/AuthRequired"
import AuthLayout from "../AuthLayout/AuthLayout"
import Login from "../Login/Login"
import Register from "../Register/Register"
import Croaks from "../Croaks/Croaks"
import Replies from "../Replies/Replies"
import Likes from "../Likes/Likes"

export const App: FC = () => {
    return <Routes>
        <Route path="/error/:heading" element={ <ErrorBanner /> } />
        <Route path="/auth/" element={ <AuthLayout /> }>
            <Route path="login" element={ <Login /> } />
            <Route path="register" element={ <Register /> } />
        </Route>
        <Route path="/" element={ <AuthRequired><AppLayout /></AuthRequired> }>
            <Route path="profile/:id/" element={ <ProfileLayout /> }>
                <Route path="croaks" element={ <Croaks /> } />
                <Route path="replies" element={ <Replies /> } />
                <Route path="likes" element={ <Likes /> } />
                <Route index element={ <Navigate to="/error/404" /> } />
                <Route path="*" element={ <Navigate to="/error/404" /> } />
            </Route>
            <Route path="*" element={ <Navigate to="/error/404" /> } />
        </Route>
    </Routes>
}

const AppContainer: FC = () => {
    const dispatch: AppDispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchUserByAuth())
    }, [])
    
    return <App />
}

export default AppContainer