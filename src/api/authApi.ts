import { AxiosResponse } from "axios"
import { api } from "./api"
import { ILoginContainer } from "../models/ILoginContainer"
import { IRefresher } from "../models/IRefresher"

export const login = ({username, password}: ILoginContainer): Promise<IRefresher> => {
    const loginForm = new FormData()

    loginForm.append("username", username)
    loginForm.append("password", password)

    return api.post<FormData, AxiosResponse<IRefresher>>("/login", loginForm).then(response => response.data)
}