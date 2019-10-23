import Vue from 'vue'
import Settings from '@/pages/Settings'

describe('@/pages/Settings.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Settings)
    }).$mount()

    expect(vm).not.to.equal(null)
  })
})
