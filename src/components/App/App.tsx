import { FC, useEffect, useState, MouseEvent } from "react"
import { IUser } from "../../models/IUser"
import { api, login } from "../../api/api"

export const App: FC = () => {
    const [user, setUser] = useState<IUser>({} as IUser)
    
    useEffect(() => {
        login({username: "ficko", password: "123456"})
    }, [])

    const onButtonClick = (evt: MouseEvent<HTMLButtonElement>): void => {
        api.get<IUser>("/users/my").then(response => setUser(response.data))
    }

    return <div>
        <pre>{ JSON.stringify(user) }</pre>
        <button onClick={ onButtonClick }>Click</button>
    </div>
}