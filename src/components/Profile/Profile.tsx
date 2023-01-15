import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectProfileState } from "../../business-logic/profile/profileSelectors"
import { IProfileState, setProfile } from "../../business-logic/profile/profileSlice"
import { AppDispatch } from "../../store"
import { ProfileHeader } from "../ProfileHeader/ProfileHeader"
import { IUser } from "../../models/IUser"
import { IProfile } from "../../models/IProfile"
import { DateJson } from "../../models/DateJson"
import { Avatar } from "../Avatar/Avatar"
import { ImageWrapper, ImageWrapperType } from "../ImageWrapper/ImageWrapper"

import classes from "./Profile.module.scss"
import { ProfileInteractionBar } from "../ProfileInteractionBar/ProfileInteractionBar"
import { ProfileUserInfo } from "../ProfileInfo/ProfileInfo"

interface IProfileContainerProps {
}

interface IProfileProps extends IProfileContainerProps {
    state: IProfileState
}

export const Profile: FC<IProfileProps> = ({state}) => {
    if (!state.profile) {
        return null
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
    </main>
}

const ProfileContainer: FC<IProfileContainerProps> = ({}) => {
    const state: IProfileState = useSelector(selectProfileState)
    const dispatch: AppDispatch = useDispatch()

    const dio: IUser = {
        id: 1,
        username: "dio_brando",
        name: "Dio Brando",
        avatarLink: "https://i.ytimg.com/vi/CGoPIsbnGFY/maxresdefault.jpg",
        registrationDate: new Date().toJSON() as DateJson
    }

    const dioProfile: IProfile = {
        user: dio,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione nisi beatae architecto fuga nobis ipsam voluptatem recusandae non quibusdam alias doloribus esse incidunt cumque dolor hic corrupti aliquid nulla excepturi ab veritatis velit quas, cum facilis? Suscipit, totam debitis? Mollitia, deserunt? Repudiandae molestias quasi iusto amet, totam asperiores ut facilis?",
        city: "Kair",
        country: "Egypt",
        croaksCount: 392,
        followersCount: 1337,
        followingCount: 1,
        backgroundImageLink: "https://animetree.files.wordpress.com/2015/06/jjba-stardust-crusaders-sunset-over-cairo.jpg"
    }

    useEffect(() => {
        dispatch(setProfile(dioProfile))
    }, [])

    return <Profile state={ state } />
}

export default ProfileContainer