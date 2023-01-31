import { FC, useEffect } from "react"
import { useParams, Navigate } from "react-router-dom"
import { ActionCreatorWithoutPayload, PayloadActionCreator } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import { ICroaksProps } from "../components/Croaks/Croaks"
import { ICroaksState } from "../business-logic/croaks/croaksSlice"

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

    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        if (parsedId) {
            dispatch(fetchCroaksByUserId(parsedId))
        }

        return () => {
            dispatch(tearDown())
        }
    }, [parsedId])

    const state = useSelector(selectCroaksState)

    if (!parsedId) {
        return <Navigate to="/error/404" />
    }

    return <Component
        state={ state }
    />
}