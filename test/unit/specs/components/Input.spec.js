import Vue from 'vue'
import Input from '@/components/Input'

describe('@/components/Input', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Input)
    }).$mount()

    expect(vm).not.to.equal(null)
  })
})
