import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"
import { Login } from "./Login"
import { ILoginFormState } from "../../business-logic/loginForm/loginFormSlice"

jest.mock("react-router-dom", () => ({
    Link: () => null
}))

describe("Login component tests", () => {
    const mockedUsernameChange = jest.fn()
    const mockedPasswordChange = jest.fn()
    let form: ILoginFormState

    beforeEach(() => {
        form = {
            isValid: false,
            username: {
                value: "",
                errors: []
            },
            password: {
                value: "",
                errors: []
            }
        }

    })

    test("changing fields", () => {
        render(
            <Login
                form={ form }
                onUsernameChange={ mockedUsernameChange }
                onPasswordChange={ mockedPasswordChange }
            />
        )

        const username = screen.getByPlaceholderText(/username/i)
        const typedUsername: string = "ficko"
        fireEvent.change(username, {
            target: {value: typedUsername}
        })
        expect(mockedUsernameChange).toBeCalledWith(typedUsername)

        const password = screen.getByPlaceholderText(/password/i)
        const typedPassword: string = "123456"
        fireEvent.change(password, {
            target: {value: typedPassword}
        })
        expect(mockedPasswordChange).toBeCalledWith(typedPassword)
    })

    test("submitting valid form", () => {
        form.isValid = true
        const mockedFormSubmit = jest.fn()

        render(
            <Login
                form={ form }
                onUsernameChange={ mockedUsernameChange }
                onPasswordChange={ mockedPasswordChange }
                onFormSubmit={ mockedFormSubmit }
            />
        )

        fireEvent.click(screen.getByRole("button"))

        expect(mockedFormSubmit).toBeCalled()
    })

    test("submitting invalid form", () => {
        const mockedFormSubmit = jest.fn()
        
        render(
            <Login
                form={ form }
                onUsernameChange={ mockedUsernameChange }
                onPasswordChange={ mockedPasswordChange }
                onFormSubmit={ mockedFormSubmit }
            />
        )

        fireEvent.click(screen.getByRole("button"))

        expect(mockedFormSubmit).not.toBeCalled()
    })

    test("showing errors", () => {
        form.username = {
            value: "ficko",
            errors: [
                "Username cannot be ficko",
                "Username must contains at least 10 symbols"
            ]
        }

        form.password = {
            value: "123456",
            errors: [
                "Password cannot be such simple",
                "Password must contains at least 8 symbols"
            ]
        }

        render(
            <Login
                form={ form }
                onUsernameChange={ mockedUsernameChange }
                onPasswordChange={ mockedPasswordChange }
            />
        )

        form.username.errors.forEach(error => {
            expect(screen.getByText(error)).toBeInTheDocument()
        })
    })
})