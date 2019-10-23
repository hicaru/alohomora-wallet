import { onEvent } from './onEvent'

export function createInstance ({ el, events, handler, middleware }) {
  return {
    el,
    eventHandlers: events.map((eventName) => ({
      event: eventName,
      handler: (event) => onEvent({ event, el, handler, middleware })
    }))
  }
}
