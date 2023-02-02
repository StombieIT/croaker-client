import { IActivable } from "./IActivable"
import { ILoadable } from "./ILoadable"
import { IProfileDto } from "./IProfileDto"

export interface IProfile extends IProfileDto {
    follow: ILoadable & IActivable
}