import { FC, HTMLAttributes } from "react"
import { DateJson } from "../../models/DateJson"
import { formatDate } from "./utils"

interface IPassedTimeProps extends HTMLAttributes<HTMLTimeElement> {
    children: DateJson | number
}

export const PassedTime: FC<IPassedTimeProps> = ({children, ...props}) => {
    return <time {...props} >
        { formatDate(new Date(children)) }
    </time>
}