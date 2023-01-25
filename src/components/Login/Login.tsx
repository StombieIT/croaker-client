import { FC } from "react"
import { Banner } from "../Banner/Banner"
import { Link } from "../Link/Link"
import LoginForm from "../LoginForm/LoginForm"

export const Login: FC = () => {
    return <>
        <LoginForm />
        <Banner>
            Don't have an account? <Link to="/auth/register">Register</Link>
        </Banner>
    </>
}