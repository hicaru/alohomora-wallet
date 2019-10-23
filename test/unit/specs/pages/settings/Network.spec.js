import Vue from 'vue'
import Network from '@/pages/settings/Network'

describe('@/pages/settings/Network.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Network)
    }).$mount()

    expect(vm).not.to.equal(null)
  })
})
