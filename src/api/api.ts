import { AnyAction, Dispatch } from "@reduxjs/toolkit"
import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import { tearDown } from "../business-logic/auth/authSlice"
import { IRefresher } from "../models/IRefresher"
import { JwtToken } from "../models/JwtToken"
import { LocalStorageKey } from "../models/LocalStorageKey"

const API_URL: string = "http://localhost:8080"
const AUTHORIZATION_PREFIX: string = "Bearer "
const AUTHORIZATION_HEADER: string = "Authorization"

let storeDispatch: Dispatch<AnyAction>

export const apllyDispatch = (dispatch: Dispatch<AnyAction>) => storeDispatch = dispatch

export const api: AxiosInstance = axios.create({
    baseURL: API_URL
})

api.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    const accessToken = localStorage.getItem(LocalStorageKey.ACCESS_TOKEN) as JwtToken
    if (config.headers && accessToken) {
        config.headers[AUTHORIZATION_HEADER] = `${AUTHORIZATION_PREFIX}${accessToken}`
    }
    return config
})

api.interceptors.response.use(
    result => result,
    async (error) => {
        const originalRequest = error.config
        if (error.response.status === 401 && originalRequest.url === "/refresh") {
            localStorage.removeItem(LocalStorageKey.REFRESH_TOKEN)
            localStorage.removeItem(LocalStorageKey.ACCESS_TOKEN)
            storeDispatch(tearDown())
            return Promise.reject(error)
        } else if (error.response.status === 401 && !originalRequest._retry) {
            localStorage.removeItem(LocalStorageKey.ACCESS_TOKEN)
            originalRequest._retry = true
            const refreshToken: JwtToken = localStorage.getItem(LocalStorageKey.REFRESH_TOKEN) as JwtToken
            const refresher: IRefresher = await api.get<IRefresher>("/refresh", {
                headers: {
                    [AUTHORIZATION_HEADER]: `${AUTHORIZATION_PREFIX}${refreshToken}`
                }
            })
                .then(result => result.data)
            localStorage.setItem(LocalStorageKey.ACCESS_TOKEN, refresher.accessToken)
            localStorage.setItem(LocalStorageKey.REFRESH_TOKEN, refresher.refreshToken)
            return api(originalRequest)
        }
        return Promise.reject(error)
    }
)
