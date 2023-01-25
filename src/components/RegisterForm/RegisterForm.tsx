import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectRegisterFormState } from "../../business-logic/registerForm/registerFormSelectors"
import {
    changeUsername, changeRepeatedPassword,
    changePassword, IRegisterFormState
} from "../../business-logic/registerForm/registerFormSlice"
import { AppDispatch } from "../../store"
import { AuthForm } from "../AuthForm/AuthForm"
import { AuthFormField } from "../AuthFormField/AuthFormField"

export const RegisterForm: FC = () => {
    const state: IRegisterFormState = useSelector(selectRegisterFormState)
    const dispatch: AppDispatch = useDispatch()
    
    return <AuthForm isValid={ state.isValid } buttonText="Register">
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
        <AuthFormField
            name="repeated-password"
            type="password"
            placeholder="Repeated password"
            field={ state.repeatedPassword }
            onChange={ repeatedPassword => dispatch(changeRepeatedPassword(repeatedPassword)) }
        />
    </AuthForm>
}