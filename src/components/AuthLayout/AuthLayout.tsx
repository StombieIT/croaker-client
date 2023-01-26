import { FC } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectIsAuthorized } from "../../business-logic/auth/authSelectors"

import classes from "./AuthLayout.module.scss"

interface IAuthLayoutProps {
    isAuthorized: boolean
}

export const AuthLayout: FC<IAuthLayoutProps> = ({isAuthorized}) => {
    if (isAuthorized) {
        return <Navigate to={-1 as any} replace />
    }

    return <div className={ classes.container }>
        <div className={ classes.content }>
            <Outlet />
        </div>
    </div>
}

const AuthLayoutContainer: FC = () => {
    const isAuthorized: boolean = useSelector(selectIsAuthorized)

    return <AuthLayout isAuthorized={ isAuthorized } />
}

export default AuthLayoutContainer