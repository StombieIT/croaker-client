import { render, screen } from "@testing-library/react"
import { describe, test } from "node:test"
import { PathTriggerLink } from "./PathTriggerLink"

describe("PathTriggerLink component tests", () => {
    const linkText: string = "some-link-text"
    const linkClassName: string = "some-class"
    const path: string = "/some-path"

    test("class attribute does not exist when component is not triggered", () => {
        render(
            <PathTriggerLink
                to={ path }
                when={ path => false }
                className={ isTriggered => isTriggered ? linkClassName : undefined }
            >
                { linkText }
            </PathTriggerLink>
        )
        
        expect(screen.getByText(linkText).className).toBeUndefined()
    })
})