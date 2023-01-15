import { FC, HTMLAttributes } from "react"
import classNames from "classnames"

import classes from "./ImageWrapper.module.scss"

export enum ImageWrapperType {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical"
}

interface IImageWrapperProps extends HTMLAttributes<HTMLDivElement> {
    type: ImageWrapperType,
    src?: string,
    alt?: string,
    className?: string
}

export const ImageWrapper: FC<IImageWrapperProps> = ({type, src, alt, className, ...props}) => {
    const imageWrapperClass: string = classNames(className, classes.common, classes[type])

    return <div {...props} className={ imageWrapperClass }>
        <img
            className={ classes[`${type}Image`] }
            src={ src }
            alt={ alt }
        />
    </div>
}