import { directive } from './click-outside'

export function removeInstance (el) {
  const instanceIndex = directive.instances.findIndex((instance) => instance.el === el)

  if (instanceIndex === -1) {
    // Note: This can happen when active status changes from false to false
    return
  }

  const instance = directive.instances[instanceIndex]

  instance.eventHandlers.forEach(
    ({ event, handler }) => document.removeEventListener(event, handler)
  )
  directive.instances.splice(instanceIndex, 1)
}
