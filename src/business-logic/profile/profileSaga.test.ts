import { FetchError } from "../../models/FetchError"
import { IProfileDto } from "../../models/IProfileDto"
import { fetchProfileByIdWorker } from "./profileSaga"

describe("fetch profile by id worker tests", () => {
    let workerGenerator: ReturnType<typeof fetchProfileByIdWorker>
    beforeEach(() => {
        workerGenerator = fetchProfileByIdWorker(Math.random())
    })
    
    test("successful fetching", () => {
        workerGenerator.next()
        const fakeProfile = {} as IProfileDto
        const next = workerGenerator.next(fakeProfile)
        expect(next.done).toBe(true)
        expect(next.value).toBe(fakeProfile)
    })

    test("unsuccessful fetching", () => {
        workerGenerator.next()
        expect(() => workerGenerator.throw(new Error())).toThrow(FetchError)
    })
})