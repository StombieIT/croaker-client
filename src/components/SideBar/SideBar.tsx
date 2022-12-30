import { FC } from "react"
import { PathTriggerLink } from "../PathTriggerLink/PathTriggerLink"

export const SideBar: FC = () => {
    return <aside>
        <PathTriggerLink
            style={ isTriggered => isTriggered ? {backgroundColor: "red"} : undefined }
            to="/ficko"
        >
            Some link
        </PathTriggerLink>
    </aside>
}