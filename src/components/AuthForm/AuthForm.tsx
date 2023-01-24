import { FC, FormEvent, CSSProperties, ReactElement } from "react"
import { Logo } from "../Logo/Logo"
import { Button, ButtonSubType } from "../Button/Button"
import { IAuthFormFieldProps } from "../AuthFormField/AuthFormField"

import classes from "./AuthForm.module.scss"

interface IAuthFormProps {
    isValid: boolean,
    children: Array<ReactElement<IAuthFormFieldProps>>,
    buttonText: string,
    onSubmit?: () => void,
    className?: string,
    style?: CSSProperties
}

export const AuthForm: FC<IAuthFormProps> = ({isValid, children, buttonText, onSubmit, ...props}) => {
    const onFormSubmit = (evt: FormEvent<HTMLFormElement>): void => {
        evt.preventDefault()
        if (isValid && onSubmit) {
            onSubmit()
        }
    }

    return <form {...props} className={ classes.form } onSubmit={ onFormSubmit } autoComplete="off">
        <Logo className={ classes.logo } />
        { children }
        <Button subType={ ButtonSubType.PRIMARY } className={ classes.button }>
            { buttonText }
        </Button>
    </form>
}