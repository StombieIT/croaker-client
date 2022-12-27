import { FC } from "react"
import { Modal } from "../Modal/Modal"
import { SideBar } from "../SideBar/SideBar"

export const App: FC = () => {
    return <div>
        <SideBar />
        <Modal />
    </div>
}