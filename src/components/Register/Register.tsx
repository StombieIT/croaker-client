import { FC } from "react"
import { Banner } from "../Banner/Banner"
import { Link } from "../Link/Link"
import { RegisterForm } from "../RegisterForm/RegisterForm"

export const Register: FC = () => {
    return <>
        <RegisterForm />
        <Banner>
            Already have an account? <Link to="/auth/login">Login</Link>
        </Banner>
    </>
}