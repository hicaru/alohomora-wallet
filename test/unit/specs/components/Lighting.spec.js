import Vue from 'vue'
import Lighting from '@/components/Lighting'

describe('@/components/Lighting', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Lighting)
    }).$mount()

    expect(vm).not.to.equal(null)
  })
})
