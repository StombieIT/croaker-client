import { IUser } from "../models/IUser"
import { dio, enrico } from "./fakeObjects"

export const getUserById = (userId: number): Promise<IUser> => new Promise((resolve, reject) => {
    switch (userId) {
        case dio.id:
            resolve(dio)
            break
        case enrico.id:
            resolve(enrico)
            break
    }
    reject()
})