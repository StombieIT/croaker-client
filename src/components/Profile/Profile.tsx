import { FC, useEffect } from "react"
import { Routes, Route, useParams } from "react-router-dom"
import { NavLink, Navigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { selectProfileState } from "../../business-logic/profile/profileSelectors"
import { fetchProfileById, IProfileState, tearDown } from "../../business-logic/profile/profileSlice"
import { AppDispatch } from "../../store"
import { ImageWrapper, ImageWrapperType } from "../ImageWrapper/ImageWrapper"
import { ProfileInteractionBar } from "../ProfileInteractionBar/ProfileInteractionBar"
import { ProfileUserInfo } from "../ProfileInfo/ProfileInfo"
import { NavBar } from "../NavBar/NavBar"
import { PreLoader } from "../PreLoader/PreLoader"
import Croaks from "../Croaks/Croaks"
import ProfileHeader from "../ProfileHeader/ProfileHeader"

import classes from "./Profile.module.scss"

interface IProfileContainerProps {
}

interface IProfileProps extends IProfileContainerProps {
    state: IProfileState
}

export const Profile: FC<IProfileProps> = ({state}) => {
    if (state.isLoading || !state.profile) {
        return <PreLoader />
    }
    
    return <main className={ classes.container }>
        <ProfileHeader
            name={ state.profile.user.name }
            croaksCount={ state.profile.croaksCount }
        />
        <ImageWrapper
            type={ ImageWrapperType.VERTICAL }
            src={ state.profile.backgroundImageLink ?? undefined }
            alt={ state.profile.backgroundImageLink ?? "background image" }
            className={ classes.backgroundImage }
        />
        <div className={ classes.content }>
            <ProfileInteractionBar
                user={ state.profile.user }
            />
            <ProfileUserInfo
                profile={ state.profile }
            />
        </div>
        <NavBar className={ classes.navbar }>
            <NavLink to={"/profile/croaks"}>
                Croaks
            </NavLink>
            <NavLink to="/profile/croaks-and-replies">
                Croaks & Replies
            </NavLink>
            <NavLink to="/profile/media">
                Media
            </NavLink>
            <NavLink to="/profile/likes">
                Likes
            </NavLink>
        </NavBar>
        <Routes>
            <Route path="/croaks" element={ <Croaks /> } />
        </Routes>
    </main>
}

const ProfileContainer: FC<IProfileContainerProps> = ({}) => {
    const { id } = useParams()
    
    const dispatch: AppDispatch = useDispatch()
    
    const state: IProfileState = useSelector(selectProfileState)
    
    useEffect(() => {
        if (id) {
            dispatch(fetchProfileById(parseInt(id)))
        }
        return () => {
            dispatch(tearDown())
        }
    }, [id])
    
    if (!id || !parseInt(id)) {
        return <Navigate to="/error/404" />
    }

    return <Profile
        state={ state }
    />
}

export default ProfileContainer