import { FC } from "react"
import Croak, { ICroakProps } from "../Croak/Croak"
import ReplyingFor from "../ReplyingFor/ReplyingFor"

import classes from "./ReplyingCroak.module.scss"

export const ReplyingCroak: FC<ICroakProps> = (props) => {
    return <div className={ classes.container }>
        <ReplyingFor croakId={ props.croak.id } />
        <Croak {...props} />
    </div>
}