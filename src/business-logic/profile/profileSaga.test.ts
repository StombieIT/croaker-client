import { FetchError } from "../../models/FetchError"
import { IProfileDto } from "../../models/IProfileDto"
import {
    fetchProfileByIdWorker,
    fetchProfileFollowIsActiveByIdWorker
} from "./profileSaga"

const generateBoolean = (): boolean => {
    return Math.random() >= 0.5
}

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

describe("fetch profile follow is active by id worker tests", () => {
    let workerGenerator: ReturnType<typeof fetchProfileFollowIsActiveByIdWorker>
    beforeEach(() => {
        workerGenerator = fetchProfileFollowIsActiveByIdWorker(Math.random())
    })
    
    test("successful fetching", () => {
        workerGenerator.next()
        const fakeFollow = generateBoolean()
        const next = workerGenerator.next(fakeFollow)
        expect(next.done).toBe(true)
        expect(next.value).toBe(fakeFollow)
    })

    test("unsuccessful fetching", () => {
        workerGenerator.next()
        expect(() => workerGenerator.throw(new Error())).toThrow(FetchError)
    })
})