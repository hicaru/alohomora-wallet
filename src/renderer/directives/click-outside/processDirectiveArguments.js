import { IDENTITY, EVENTS } from './click-outside'

export function processDirectiveArguments (bindingValue) {
  const isFunction = typeof bindingValue === 'function'

  if (!isFunction && typeof bindingValue !== 'object') {
    throw new Error('click-outside: Binding value must be a function or an object')
  }

  return {
    handler: isFunction ? bindingValue : bindingValue.handler,
    middleware: bindingValue.middleware || IDENTITY,
    events: bindingValue.events || EVENTS,
    isActive: !(bindingValue.isActive === false)
  }
}
