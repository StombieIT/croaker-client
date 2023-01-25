import { FC, ReactElement } from "react"
import { useSelector } from "react-redux"
import { Navigate, NavLink } from "react-router-dom"
import { selectIsUnauthorized } from "../../business-logic/auth/authSelectors"

interface IAuthRequiredContainerProps {
    children: ReactElement | Array<ReactElement>
}

export const AuthRequiredContainer: FC<IAuthRequiredContainerProps> = ({children}) => {
    const isUnauthorized: boolean = useSelector(selectIsUnauthorized)

    if (isUnauthorized) {
        return <Navigate to="/auth/login" />
    }
    
    return <>
        { children }
    </>
}

export default AuthRequiredContainer