import { FC, useEffect } from "react"
import { useParams, Navigate } from "react-router-dom"
import { ActionCreatorWithoutPayload, PayloadActionCreator } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import { ICroaksProps } from "../components/Croaks/Croaks"
import { ICroaksState } from "../business-logic/croaks/croaksSlice"

const EXTRA_ZONE_COEFFICIENT = 1.05

export const croaksContainer = (
    selectCroaksState: (state: RootState) => ICroaksState,
    fetchCroaksByUserId: PayloadActionCreator<number>,
    tearDown: ActionCreatorWithoutPayload
) =>
(Component: FC<ICroaksProps>): FC =>
() => {
    const { id } = useParams()
    let parsedId: number | undefined
    if (id) {
        parsedId = parseInt(id)
    }

    const state = useSelector(selectCroaksState)
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        if (parsedId) {
            dispatch(fetchCroaksByUserId(parsedId))
        }

        return () => {
            dispatch(tearDown())
        }
    }, [parsedId])

    useEffect(() => {
        const documentElement = document.documentElement
        const onDocumentElementScroll = parsedId && !state.isLoading && state.paginator?.hasNextPage
            ? () => {
                if (parsedId && documentElement.scrollHeight - documentElement.scrollTop < documentElement.clientHeight * EXTRA_ZONE_COEFFICIENT) {
                    dispatch(fetchCroaksByUserId(parsedId))
                }
            }
            : undefined

        if (onDocumentElementScroll) {
            document.addEventListener("scroll", onDocumentElementScroll)
        }

        return () => {
            if (onDocumentElementScroll) {
                document.removeEventListener("scroll", onDocumentElementScroll)
            }
        }
    }, [parsedId, state.paginator?.hasNextPage, state.isLoading])


    if (!parsedId) {
        return <Navigate to="/error/404" />
    }

    return <Component
        state={ state }
    />
}