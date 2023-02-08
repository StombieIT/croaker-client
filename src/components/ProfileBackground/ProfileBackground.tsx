import { FC } from "react"
import Skeleton from "react-loading-skeleton"
import { useSelector } from "react-redux"
import { ImageWrapper, ImageWrapperType } from "../ImageWrapper/ImageWrapper"
import { selectProfileBackground } from "../../business-logic/profile/profileSelectors"

import classes from "./ProfileBackground.module.css"

interface IProfileBackgroundProps {
    imageLink: string | null
}

export const ProfileBackground: FC<IProfileBackgroundProps> = ({imageLink}) => {
    return <ImageWrapper
        type={ ImageWrapperType.VERTICAL }
        src={ imageLink ?? undefined }
        alt={ imageLink ?? "background image" }
        className={ classes.backgroundImage }
    />
}

const ProfileBackgroundContainer: FC = () => {
    const profileBackground = useSelector(selectProfileBackground)

    if (!profileBackground) {
        return <Skeleton
            className={ classes.backgroundImage }
        />
    }

    return <ProfileBackground
        {...profileBackground}
    />
}

export default ProfileBackgroundContainer
