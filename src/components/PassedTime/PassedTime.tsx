import { FC, HTMLAttributes, useMemo } from "react"
import { DateJson } from "../../models/DateJson"
import { formatDate } from "../../utils/formatDate"

interface IPassedTimeProps extends HTMLAttributes<HTMLTimeElement> {
    children: DateJson | number
}

export const PassedTime: FC<IPassedTimeProps> = ({children, ...props}) => {
    const formattedDate = useMemo<string>(() => formatDate(new Date(children)), [])

    return <time {...props} >
        { formattedDate }
    </time>
}