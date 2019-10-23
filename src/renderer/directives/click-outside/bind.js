import { processDirectiveArguments } from './processDirectiveArguments'
import { createInstance } from './createInstance'
import { directive } from './click-outside'

export function bind (el, { value }) {
  const {
    events,
    handler,
    middleware,
    isActive
  } = processDirectiveArguments(value)

  if (!isActive) {
    return
  }

  const instance = createInstance({
    el,
    events,
    handler,
    middleware
  })

  instance.eventHandlers.forEach(
    ({ event, handler }) => Promise.resolve(document.addEventListener(event, handler))
  )
  directive.instances.push(instance)
}
