import { FC } from "react"
import { useSelector } from "react-redux"
import { selectProfileDescription } from "../../business-logic/profile/profileSelectors"
import { OrdinaryParagraph } from "../OrdinaryParagraph/OrdinaryParagraph"
import { SkeletonProfileDescription } from "./SkeletonProfileDescription"

interface IProfileDescriptionProps {
    description: string | null
}

export const ProfileDescription: FC<IProfileDescriptionProps> = ({description}) => {
    // TODO: return placeholder
    if (!description) {
        return null
    }

    return <OrdinaryParagraph>
        { description }
    </OrdinaryParagraph>
}

const ProfileDescriptionContainer: FC = () => {
    const profileDescription = useSelector(selectProfileDescription)
    
    if (!profileDescription) {
        return <SkeletonProfileDescription /> 
    }

    return <ProfileDescription
        {...profileDescription}
    />
}

export default ProfileDescriptionContainer