import { IAccessor } from "./IAccessor"
import { JwtToken } from "./JwtToken"

export interface IRefresher extends IAccessor {
    refreshToken: JwtToken
}
