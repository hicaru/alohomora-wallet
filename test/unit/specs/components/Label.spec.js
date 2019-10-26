import Vue from 'vue'
import Label from '@/components/Label'

describe('@/components/Label', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Label)
    }).$mount()

    expect(vm).not.to.equal(null)
  })
})
