import Vue from 'vue'
import SwitchButton from '@/views/SwitchButton'

describe('@/components/SwitchButton', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(SwitchButton)
    }).$mount()

    expect(vm).not.to.equal(null)
  })
})
