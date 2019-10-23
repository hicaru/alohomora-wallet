import { processDirectiveArguments } from './processDirectiveArguments'
import { onEvent } from './onEvent'
import { removeInstance } from './removeInstance'
import { createInstance } from './createInstance'
import { directive } from './click-outside'

export function update (el, { value, oldValue }) {
  if (JSON.stringify(value) === JSON.stringify(oldValue)) {
    return null
  }

  const {
    events,
    handler,
    middleware,
    isActive
  } = processDirectiveArguments(value)

  if (!isActive) {
    removeInstance(el)
    return null
  }

  let instance = directive.instances.find((instance) => instance.el === el)

  if (instance) {
    instance.eventHandlers.forEach(
      ({ event, handler }) => document.removeEventListener(event, handler)
    )
    instance.eventHandlers = events.map((eventName) => ({
      event: eventName,
      handler: (event) => onEvent({ event, el, handler, middleware })
    }))
  } else {
    instance = createInstance({ el, events, handler, middleware })
    directive.instances.push(instance)
  }

  instance.eventHandlers.forEach(
    ({ event, handler }) => Promise.resolve(document.addEventListener(event, handler))
  )
}
