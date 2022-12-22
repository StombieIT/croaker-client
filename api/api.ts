import axios, { AxiosInstance } from "axios"

const BASE_URL: string = "http://localhost:8080/"
const AUTHORIZATION_PREFIX: string = "Bearer "

type JwtToken = `${string}.${string}.${string}`

export interface IJwtAuthorizationToken {
    accessToken: JwtToken,
    refreshToken: JwtToken
}

type AuthorizedApiFactoryMethod = (authorizationToken: IJwtAuthorizationToken) => AxiosInstance

export const createAuthorizedForAccessApi: AuthorizedApiFactoryMethod = authenticationToken => axios.create({
    baseURL: BASE_URL,
    headers: {
        "Authorization": `${AUTHORIZATION_PREFIX}${authenticationToken.accessToken}`
    }
})

export const createAuthorizedForRefreshApi: AuthorizedApiFactoryMethod = authenticationToken => axios.create({
    baseURL: BASE_URL,
    headers: {
        "Authorization": `${AUTHORIZATION_PREFIX}${authenticationToken.accessToken}`
    }
})