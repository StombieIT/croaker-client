import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { IAccessor } from "../models/IAccessor"
import { IRefresher } from "../models/IRefresher"
import { IUser } from "../models/IUser"

const API_URL: string = "http://localhost:8080"
const AUTHORIZATION_PREFIX: string = "Bearer "

export const api: AxiosInstance = axios.create({
    baseURL: API_URL
})

export const login = (user: IUser): void => {
    const formData = new FormData()
    formData.append("username", user.username)
    formData.append("password", user.password)
    api.post<FormData, AxiosResponse<IRefresher>>("/login", formData)
        .then(result => result.data)
        .then(refresher => {
            localStorage.setItem("refreshToken", refresher.refreshToken)
            localStorage.setItem("accessToken", refresher.accessToken)
        })
}

api.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    if (config.headers) {
        config.headers.Authorization = `${AUTHORIZATION_PREFIX}${localStorage.getItem("accessToken")}`
    }
    return config
})

api.interceptors.response.use(
    result => result,
    async (error) => {
        const originalRequest = error.config
        console.log(originalRequest)
        console.log(originalRequest.url)
        if (error.response.status === 401 && originalRequest.url === "/refresh") {
            localStorage.clear()
            return Promise.reject(error)
        } else if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            const accessor = await axios.get<IAccessor>(`${API_URL}/refresh`, {
                headers: {
                    "Authorization": `${AUTHORIZATION_PREFIX}${localStorage.getItem("refreshToken")}`
                }
            })
                .then(result => result.data)
            localStorage.setItem("accessToken", accessor.accessToken)
            return api(originalRequest)
        }
        return Promise.reject(error)
    }
)
