import directive from './click-outside'

export default {
  install (Vue) {
    Vue.directive('click-outside', directive)
  },
  directive
}
