import { FC, CSSProperties, PropsWithChildren } from "react"
import { useLocation, Link, To, Location } from "react-router-dom"

interface IPathTriggerLinkProps {
    when?: (path: string) => boolean,
    to: To,
    className?: (isTriggered: boolean) => string | undefined,
    style?: (isTriggered: boolean) => CSSProperties | undefined
}

export const PathTriggerLink: FC<PropsWithChildren<IPathTriggerLinkProps>> = ({
    when = path => path === to,
    to,
    className,
    style,
    children
}) => {
    const { pathname }: Location = useLocation()

    return <Link
        to={ to }
        className={ className && className(when(pathname)) }
        style={ style && style(when(pathname)) }
    >
        { children }
    </Link>
}