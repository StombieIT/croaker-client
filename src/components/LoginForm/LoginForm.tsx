import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectLoginFormState } from "../../business-logic/loginForm/loginFormSelectors"
import { sendLogin } from "../../business-logic/auth/authSlice"
import { changePassword, changeUsername, ILoginFormState } from "../../business-logic/loginForm/loginFormSlice"
import { AppDispatch } from "../../store"
import { AuthForm } from "../AuthForm/AuthForm"
import { AuthFormField } from "../AuthFormField/AuthFormField"

const LoginFormContainer: FC = () => {
    const state: ILoginFormState = useSelector(selectLoginFormState)
    const dispatch: AppDispatch = useDispatch()

    return <AuthForm
        onSubmit={ () => dispatch(sendLogin({username: state.username.value, password: state.password.value})) }
        isValid={ state.isValid }
        buttonText="Login"
    >
        <AuthFormField
            name="username"
            type="text"
            placeholder="Username"
            field={ state.username }
            onChange={ username => dispatch(changeUsername(username)) }
        />
        <AuthFormField
            name="password"
            type="password"
            placeholder="Password"
            field={ state.password }
            onChange={ password => dispatch(changePassword(password)) }
        />
    </AuthForm>
}

export default LoginFormContainer