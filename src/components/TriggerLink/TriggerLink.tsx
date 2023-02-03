import { CSSProperties, FC, ReactNode } from "react"
import { To, Link, useLocation } from "react-router-dom"

interface ITriggerLinkContainerProps {
    to: To,
    when: (pathname: string) => boolean,
    className?: string |  ((isActive: boolean) => string | undefined),
    style?: CSSProperties | ((isActive: boolean) => CSSProperties | undefined),
    children: ReactNode | ((isActive: boolean) => ReactNode)
}

interface ITriggerLinkProps extends ITriggerLinkContainerProps {
    pathname: string
}

export const TriggerLink: FC<ITriggerLinkProps> = ({pathname, to, when, className, style, children}) => {
    const isActive: boolean = when(pathname)
    
    const linkClass: string | undefined = typeof className === "function" ? className(isActive) : className
    const linkStyle: CSSProperties | undefined = typeof style === "function" ? style(isActive) : style
    const linkChildren: ReactNode = typeof children === "function" ? children(isActive) : children

    return <Link
        to={ to }
        className={ linkClass }
        style={ linkStyle }
    >
        { linkChildren }
    </Link>
}

export const TriggerLinkContainer: FC<ITriggerLinkContainerProps> = props => {
    const location = useLocation()

    return <TriggerLink
        {...props}
        pathname={ location.pathname }
    />
}

export default TriggerLinkContainer