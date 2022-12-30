import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { PathTriggerLink } from "./PathTriggerLink"

describe("PathTriggerLink component tests", () => {
    const linkText: string = "some-link-text"
    const linkClassName: string = "some-class"
    const path: string = "/some-path"

    test("component uses children")
    
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

    test("style attribute overrides component's styles")
})