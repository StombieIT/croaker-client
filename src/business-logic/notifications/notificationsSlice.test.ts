import {
    appendNotificationContainer,
    appendNotification,
    removeNotification,
    INotificationsState,
    notificationsReducer
} from "./notificationsSlice"
import { NotificationType } from "../../models/NotificationType"
import { INotificationContainer } from "../../models/INotificationContainer"
import { INotification } from "../../models/INotification"
import { v4 } from "uuid"

const generateNotificationContainer = (type: NotificationType): INotificationContainer => ({
    type,
    text: v4()
})

const generateNotification = (type: NotificationType): INotification => ({
    ...generateNotificationContainer(type),
    id: v4()
})

const randomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min

describe("notifications reducer tests", () => {
    let state: INotificationsState
    let notification: INotification
    
    beforeEach(() => {
        state = {
            list: []
        }
        notification = generateNotification(NotificationType.INFO)
    })

    test("append notification container to empty array", () => {
        const appendNotificationContainerAction = appendNotificationContainer(notification)

        state = notificationsReducer(state, appendNotificationContainer)

        expect(state.list.length).toBe(1)
    })

    test("append notification container to filled array", () => {
        state.list.push(
            generateNotification(NotificationType.ERROR),
            generateNotification(NotificationType.SUCCESS)
        )
        const initialListLength: number = state.list.length
        
        state = notificationsReducer(state, appendNotification(notification))

        expect(state.list.length).toBe(initialListLength + 1)
    })

    test("append notification to empty array", () => {
        state = notificationsReducer(state, appendNotification(notification))

        expect(state.list.length).toBe(1)
        expect(state.list).toContainEqual(notification)
    })

    test("append notifications to the end of array", () => {
        state.list.push(
            generateNotification(NotificationType.ERROR),
            generateNotification(NotificationType.SUCCESS)
        )
        const initialListLength: number = state.list.length
        
        state = notificationsReducer(state, appendNotification(notification))

        expect(state.list.length).toBe(initialListLength + 1)
        expect(state.list.at(-1)).toEqual(notification)
    })

    test("remove notification from empty array", () => {
        const updatedState = notificationsReducer(state, removeNotification(v4()))

        expect(updatedState).toEqual(state)
    })

    test("remove notification from filled array", () => {
        state.list.push(
            generateNotification(NotificationType.INFO),
            generateNotification(NotificationType.SUCCESS),
            generateNotification(NotificationType.ERROR),
        )
        const list: Array<INotification> = state.list
        const notificationId: string = state.list[randomInt(0, state.list.length - 1)].id

        state = notificationsReducer(state, removeNotification(notificationId))

        expect(state.list.length).toBe(list.length - 1)
        expect(state.list).toEqual(list.filter(notification => notification.id !== notificationId))
    })
})