import { FC, useEffect, useState, MouseEvent } from "react"
import { IUser } from "../../models/IUser"
import { ACCESS_TOKEN, api, REFRESH_TOKEN } from "../../api/api"
import { IRefresher } from "../../models/IRefresher"
import { AxiosResponse } from "axios"

export const App: FC = () => {
    const [user, setUser] = useState<IUser>({} as IUser)
    
    useEffect(() => {
        const formData = new FormData()
        formData.append("username", "ficko")
        formData.append("password", "123456")
        api.post<FormData, AxiosResponse<IRefresher>>("/login", formData)
            .then(response => response.data)
            .then(refresher => {
                localStorage.setItem(ACCESS_TOKEN, refresher.accessToken)
                localStorage.setItem(REFRESH_TOKEN, refresher.refreshToken)
            })
    }, [])

    const onButtonClick = (evt: MouseEvent<HTMLButtonElement>): void => {
        api.get<IUser>("/users/my").then(response => setUser(response.data))
    }

    return <div>
        <pre>{ JSON.stringify(user) }</pre>
        <button onClick={ onButtonClick }>Click</button>
    </div>
}