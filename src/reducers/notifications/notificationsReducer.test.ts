import {
    createAppendNotificationAction,
    createRemoveNotificationAction,
    INotificationsState,
    notificationsReducer
} from "./notificationsReducer"
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
    let notificationContainer: INotificationContainer
    
    beforeEach(() => {
        state = {
            list: []
        }
        notificationContainer = generateNotificationContainer(NotificationType.INFO)
    })

    test("append notification to empty array", () => {
        const appendNotificationAction = createAppendNotificationAction(notificationContainer)
        const notificationId: string = appendNotificationAction.payload.id

        state = notificationsReducer(state, appendNotificationAction)

        expect(state.list.length).toBe(1)
        expect(state.list[0]).toEqual({...notificationContainer, id: notificationId})
    })

    test("append notifications to the end of array", () => {
        state.list.push(
            generateNotification(NotificationType.ERROR),
            generateNotification(NotificationType.SUCCESS)
        )
        const initialListLength: number = state.list.length
        const appendNotificationAction = createAppendNotificationAction(notificationContainer)
        const notificationId: string = appendNotificationAction.payload.id
        
        state = notificationsReducer(state, appendNotificationAction)

        expect(state.list.length).toBe(initialListLength + 1)
        expect(state.list.at(-1)).toEqual({...notificationContainer, id: notificationId})
    })

    test("remove notification from empty array", () => {
        const removeNotificationAction = createRemoveNotificationAction(v4())

        const updatedState = notificationsReducer(state, removeNotificationAction)

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
        const removeNotificationAction = createRemoveNotificationAction(notificationId)

        state = notificationsReducer(state, removeNotificationAction)

        expect(state.list.length).toBe(list.length - 1)
        expect(state.list).toEqual(list.filter(notification => notification.id !== notificationId))
    })
})