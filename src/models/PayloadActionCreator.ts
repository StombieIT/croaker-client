import { IPayloadAction } from "./IPayloadAction"

export type PayloadActionCreator<T, P> = (payload: P) => IPayloadAction<T, P>