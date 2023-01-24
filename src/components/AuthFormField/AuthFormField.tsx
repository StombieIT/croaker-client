import classNames from "classnames"
import { FC } from "react"
import { IField } from "../../models/IField"

import classes from "./AuthFormField.module.scss"

import showIcon from "./show.png"

export interface IAuthFormFieldProps {
    field: IField,
    onChange: (value: string) => void,
    name?: string,
    placeholder?: string,
    type?: "text" | "password"
}

export const AuthFormField: FC<IAuthFormFieldProps> = ({field, onChange, ...inputProps}) => {
    const labelClass: string = classNames(classes.label, {
        [classes.invalid]: field.errors.length
    })
    
    return <>
        <label className={ labelClass }>
            <input
                {...inputProps}
                value={ field.value }
                onChange={ evt => onChange(evt.target.value) }
                className={ classes.input }
            />
        </label>
        {
            field.errors.length
            ? <ul className={ classes.errorsList }>
                {
                    field.errors.map(error => <li className={ classes.error } key={ error }>{ error }</li>)
                }
            </ul>
            : null
        }
    </>
}