import { IProfile } from "../models/IProfile"
import { dio, dioProfile } from "./fakeObjects"

export const getProfileByUserId = (userId: number): Promise<IProfile> => new Promise((resolve, reject) => {
    setTimeout(() => {
        switch (userId) {
            case dioProfile.user.id:
                resolve(dioProfile)
                break
        }
        reject()
    }, 1_500)
})