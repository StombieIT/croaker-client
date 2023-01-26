import { FC } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectLoginFormState } from "../../business-logic/loginForm/loginFormSelectors"
import { AppDispatch } from "../../store"
import { changePassword, changeUsername, ILoginFormState } from "../../business-logic/loginForm/loginFormSlice"
import { AuthForm } from "../AuthForm/AuthForm"
import { AuthFormField } from "../AuthFormField/AuthFormField"
import { Banner } from "../Banner/Banner"
import { Link } from "../Link/Link"
import { sendLogin } from "../../business-logic/auth/authSlice"

interface ILoginProps {
    form: ILoginFormState,
    onUsernameChange: (username: string) => void,
    onPasswordChange: (username: string) => void,
    onFormSubmit?: () => void
}

export const Login: FC<ILoginProps> = ({form, onUsernameChange, onPasswordChange, onFormSubmit}) => {
    return <>
        <AuthForm
            isValid={ form.isValid }
            onSubmit={ onFormSubmit }
            buttonText="Login"
        >
            <AuthFormField
                name="username"
                type="text"
                placeholder="Username"
                field={ form.username }
                onChange={ onUsernameChange }
            />
            <AuthFormField
                name="password"
                type="password"
                placeholder="Password"
                field={ form.password }
                onChange={ onPasswordChange }
            />
        </AuthForm>
        <Banner>
            Don't have an account? <Link to="/auth/register">Register</Link>
        </Banner>
    </>
}

const LoginContainer: FC = () => {
    const form: ILoginFormState = useSelector(selectLoginFormState)
    const dispatch: AppDispatch = useDispatch()
    
    return <Login
        form={ form }
        onFormSubmit={ () => dispatch(sendLogin({username: form.username.value, password: form.password.value})) }
        onUsernameChange={ username => dispatch(changeUsername(username)) }
        onPasswordChange={ password => dispatch(changePassword(password)) }
    />
}

export default LoginContainer