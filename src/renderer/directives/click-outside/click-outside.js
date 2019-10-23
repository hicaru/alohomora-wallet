import { removeInstance } from './removeInstance'
import { bind } from './bind'
import { update } from './update'

const HAS_WINDOWS = typeof window !== 'undefined'
const HAS_NAVIGATOR = typeof navigator !== 'undefined'
const IS_TOUCH =
  HAS_WINDOWS && ('ontouchstart' in window || (HAS_NAVIGATOR && navigator.msMaxTouchPoints > 0))
export const EVENTS = IS_TOUCH ? ['touchstart'] : ['click']
export const IDENTITY = (item) => item

export const directive = {
  instances: []
}

directive.bind = bind
directive.update = update
directive.unbind = removeInstance

export default directive
