import Vue from 'vue'
import Send from '@/pages/Send'

describe('@/pages/Send.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Send)
    }).$mount()

    expect(vm).not.to.equal(null)
  })
})
