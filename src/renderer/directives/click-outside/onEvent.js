export function onEvent ({ el, event, handler, middleware }) {
  const isClickOutside = event.target !== el && !el.contains(event.target)

  if (!isClickOutside) {
    return null
  }

  if (middleware(event, el)) {
    handler(event, el)
  }
}
