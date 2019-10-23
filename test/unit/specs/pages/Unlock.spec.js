import Vue from 'vue'
import Unlock from '@/pages/Unlock'

describe('@/pages/Unlock.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Unlock)
    }).$mount()

    expect(vm).not.to.equal(null)
  })
})
