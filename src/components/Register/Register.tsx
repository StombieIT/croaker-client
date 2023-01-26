import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectRegisterFormState } from "../../business-logic/registerForm/registerFormSelectors"
import {
    changePassword, changeRepeatedPassword,
    changeUsername, IRegisterFormState
} from "../../business-logic/registerForm/registerFormSlice"
import { AppDispatch } from "../../store"
import { Banner } from "../Banner/Banner"
import { Link } from "../Link/Link"
import { AuthForm } from "../AuthForm/AuthForm"
import { AuthFormField } from "../AuthFormField/AuthFormField"

interface IRegisterContainerProps {
}

interface IRegisterProps extends IRegisterContainerProps {
    form: IRegisterFormState,
    onUsernameChange: (username: string) => void,
    onPasswordChange: (password: string) => void,
    onRepeatedPasswordChange: (repeatedPassword: string) => void
}

export const Register: FC<IRegisterProps> = ({
    form,
    onUsernameChange,
    onPasswordChange,
    onRepeatedPasswordChange
}) => {
    return <>
        <AuthForm isValid={ form.isValid } buttonText="Register">
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
            <AuthFormField
                name="repeated-password"
                type="password"
                placeholder="Repeated password"
                field={ form.repeatedPassword }
                onChange={ onRepeatedPasswordChange }
            />
        </AuthForm>
        <Banner>
            Already have an account? <Link to="/auth/login">Login</Link>
        </Banner>
    </>
}

const RegisterContainer: FC<IRegisterContainerProps> = ({}) => {
    const form: IRegisterFormState = useSelector(selectRegisterFormState)
    const dispatch: AppDispatch = useDispatch()

    return <Register
        form={ form }
        onUsernameChange={ username => dispatch(changeUsername(username)) }
        onPasswordChange={ password => dispatch(changePassword(password)) }
        onRepeatedPasswordChange={ repeatedPassword => dispatch(changeRepeatedPassword(repeatedPassword)) }
    />
}

export default RegisterContainer