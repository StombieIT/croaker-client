import { FC } from "react"
import { useParams } from "react-router-dom"

import classes from "./ErrorBanner.module.scss"
import errorIcon from "./errorIcon.png"

enum ErrorBannerConsideredHeading {
    NOT_FOUND = "404"
}

interface IErrorBannerContainerProps {
}

interface IErrorBannerProps extends IErrorBannerContainerProps {
    heading?: string
}

const ErrorBanner: FC<IErrorBannerProps> = ({heading}) => {
    let errorText: string | undefined
    switch (heading) {
        case ErrorBannerConsideredHeading.NOT_FOUND:
            errorText = "Page not found ;("
            break
    }
    
    return <div className={ classes.banner }>
        <img
            className={ classes.icon }
            src={ errorIcon }
            alt="Error icon"
        />
        <h1 className={ classes.heading }>
            {
                heading
                ? heading
                : "Error"
            }
        </h1>
        {
            errorText
            ? <div className={ classes.text }>{ errorText }</div>
            : null
        }
    </div>
}

const ErrorBannerContainer: FC<IErrorBannerContainerProps> = ({}) => {
    const { heading } = useParams()
    
    return <ErrorBanner
        heading={ heading }
    />
}

export default ErrorBannerContainer