import { DateJsonDefaultPrefix } from "./DateJsonDefaultPrefix"
import { DateJsonDefaultSuffix } from "./DateJsonDefaultSuffix"
import { DateJsonSpringSuffix } from "./DateJsonSpringSuffix"

export type DateJson = `${DateJsonDefaultPrefix}${DateJsonDefaultSuffix | DateJsonSpringSuffix}`