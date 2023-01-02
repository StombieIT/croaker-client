import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { PathTriggerLink } from "./PathTriggerLink"

import classes from "Test.module.css"
import { CSSProperties } from "react"

describe("PathTriggerLink component tests", () => {
    const linkText: string = "some-link-text"
    const linkClassName: string = "some-class"
    const path: string = "/some-path"

    test("component uses children", () => {
        render(
            <BrowserRouter>
                <PathTriggerLink
                    to={ path }
                >
                    { linkText }
                </PathTriggerLink>
            </BrowserRouter>
        )

        expect(screen.getByText(linkText)).toBeDefined()
    })
    
    test("class attribute does not exist when component is not triggered", () => {
        render(
            <BrowserRouter>
                <PathTriggerLink
                    to={ path }
                    when={ path => false }
                    className={ isTriggered => isTriggered ? linkClassName : undefined }
                >
                    { linkText }
                </PathTriggerLink>
            </BrowserRouter>
        )
        
        expect(screen.getByText(linkText).className).toBeFalsy()
    })

    test("class attribute exists when component is triggered", () => {
        render(
            <BrowserRouter>
                <PathTriggerLink
                    to={ path }
                    when={ path => true }
                    className={ isTriggered => isTriggered ? linkClassName : undefined }
                >
                    { linkText }
                </PathTriggerLink>
            </BrowserRouter>
        )

        expect(screen.getByText(linkText).className).toEqual(linkClassName)
    })

    test("style attribute overrides component's styles", () => {
        const linkStyle: CSSProperties = {
            backgroundColor: "green"
        }
        
        render(
            <BrowserRouter>
                    <PathTriggerLink
                        to={ path }
                        className={ isTriggered => classes.common }
                        style={ isTriggered => linkStyle }
                    >
                        { linkText }
                    </PathTriggerLink>
            </BrowserRouter>
        )
        
        const link: HTMLElement = screen.getByText(linkText)
        
        expect(link.style.backgroundColor).toBe(linkStyle.backgroundColor)
    }) 
})