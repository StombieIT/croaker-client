import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { IRefresher } from "../models/IRefresher"
import { JwtToken } from "../models/JwtToken"

const API_URL: string = "http://localhost:8080"
const AUTHORIZATION_PREFIX: string = "Bearer "
const AUTHORIZATION_HEADER: string = "Authorization"
export const ACCESS_TOKEN: string = "accessToken"
export const REFRESH_TOKEN: string = "refreshToken"

export const api: AxiosInstance = axios.create({
    baseURL: API_URL
})

api.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN) as JwtToken
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
            localStorage.removeItem(REFRESH_TOKEN)
            localStorage.removeItem(ACCESS_TOKEN)
            return Promise.reject(error)
        } else if (error.response.status === 401 && !originalRequest._retry) {
            localStorage.removeItem(ACCESS_TOKEN)
            originalRequest._retry = true
            const refreshToken: JwtToken = localStorage.getItem(REFRESH_TOKEN) as JwtToken
            const refresher: IRefresher = await api.get<IRefresher>("/refresh", {
                headers: {
                    [AUTHORIZATION_HEADER]: `${AUTHORIZATION_PREFIX}${refreshToken}`
                }
            })
                .then(result => result.data)
            localStorage.setItem(ACCESS_TOKEN, refresher.accessToken)
            localStorage.setItem(REFRESH_TOKEN, refresher.refreshToken)
            return api(originalRequest)
        }
        return Promise.reject(error)
    }
)
