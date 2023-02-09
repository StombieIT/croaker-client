import { FC, useEffect } from "react"
import { useParams, Outlet } from "react-router-dom"
import { NavLink, Navigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { selectProfileState } from "../../business-logic/profile/profileSelectors"
import { fetchFullProfileById, IProfileState, tearDown } from "../../business-logic/profile/profileSlice"
import { AppDispatch } from "../../store"
import ProfileInteractionBar from "../ProfileInteractionBar/ProfileInteractionBar"
import ProfileInfo from "../ProfileInfo/ProfileInfo"
import { NavBar } from "../NavBar/NavBar"
import ProfileHeader from "../ProfileHeader/ProfileHeader"
import ProfileBackground from "../ProfileBackground/ProfileBackground"

import classes from "./ProfileLayout.module.scss"

interface IProfileLayoutProps {
    userId: number
}

export const ProfileLayout: FC<IProfileLayoutProps> = ({userId}) => {
    return <main className={ classes.container }>
        <ProfileHeader />
        <ProfileBackground />
        <div className={ classes.content }>
            <ProfileInteractionBar />
            <ProfileInfo />
        </div>
        <NavBar className={ classes.navbar }>
            <NavLink to={`/profile/${userId}/croaks`}>
                Croaks
            </NavLink>
            <NavLink to={`/profile/${userId}/replies`}>
                Replies
            </NavLink>
            <NavLink to={`/profile/${userId}/likes`}>
                Likes
            </NavLink>
        </NavBar>
        <Outlet />
    </main>
}

const ProfileLayoutContainer: FC = () => {
    const { id } = useParams()
    let parsedId: number | undefined
    if (id) {
        parsedId = parseInt(id)
    }
    
    const dispatch: AppDispatch = useDispatch()
    
    const state: IProfileState = useSelector(selectProfileState)
    
    useEffect(() => {
        if (parsedId) {
            dispatch(fetchFullProfileById(parsedId))
        }
        return () => {
            dispatch(tearDown())
        }
    }, [parsedId])
    
    if (!parsedId) {
        return <Navigate to="/error/404" />
    }

    return <ProfileLayout
        userId={ parsedId }
    />
}

export default ProfileLayoutContainer