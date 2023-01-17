import { IUser } from "../models/IUser"
import { DateJson } from "../models/DateJson"
import { IProfile } from "../models/IProfile"
import { IPaginator } from "../models/IPaginator"
import { ICroak } from "../models/ICroak"

export const dio: IUser = {
    id: 1,
    username: "dio_brando",
    name: "Dio Brando",
    avatarLink: "https://i.ytimg.com/vi/CGoPIsbnGFY/maxresdefault.jpg",
    registrationDate: new Date().toJSON() as DateJson
}

export const dioProfile: IProfile = {
    user: dio,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione nisi beatae architecto fuga nobis ipsam voluptatem recusandae non quibusdam alias doloribus esse incidunt cumque dolor hic corrupti aliquid nulla excepturi ab veritatis velit quas, cum facilis? Suscipit, totam debitis? Mollitia, deserunt? Repudiandae molestias quasi iusto amet, totam asperiores ut facilis?",
    city: "Kair",
    country: "Egypt",
    croaksCount: 392,
    followersCount: 1337,
    followingCount: 1,
    backgroundImageLink: "https://animetree.files.wordpress.com/2015/06/jjba-stardust-crusaders-sunset-over-cairo.jpg"
}

export const enrico: IUser = {
    id: 333,
    username: "enrico_pucci",
    name: "Enrico Pucci",
    avatarLink: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/12/Enrico-Pucci.jpg",
    registrationDate: new Date().toJSON() as DateJson
}

export const croaksPaginator: IPaginator<ICroak> = {
    page: 1,
    hasNextPage: true,
    pageExists: true,
    hasPreviousPage: false,
    items: [
        {
            id: 1,
            text: "Bawdbakwdj awhdawbdjkawd awdjbakjwbdkabwdjbakwd awdkbjawdkjawkdakjwbdkb awdkjabwdbawkbdj",
            creationDate: "27-03-2021T17:03:122.12Z",
            likes: {
                count: 127,
                isActive: false,
                isLoading: false
            },
            comments: {
                count: 10,
                isActive: false,
                isLoading: false
            },
            recroaks: {
                count: 0,
                isActive: false,
                isLoading: false
            },
            author: dio,
            imagesLinks: []
        },
        {
            id: 2,
            text: "Bawdbakwdj awhdawbdjkawd awdjbakjwbdkabwdjbakwd awdkbjawdkjawkdakjwbdkb awdkjabwdbawkbdj",
            creationDate: "27-03-2021T17:03:122.12Z",
            likes: {
                count: 32,
                isActive: false,
                isLoading: false
            },
            comments: {
                count: 21,
                isActive: false,
                isLoading: false
            },
            recroaks: {
                count: 0,
                isActive: false,
                isLoading: false
            },
            author: dio,
            imagesLinks: []
        },
    ]
}