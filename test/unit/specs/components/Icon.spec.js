import Vue from 'vue'
import Icon from '@/components/Icon'

describe('@/components/grids/Column', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Icon)
    }).$mount()

    expect(vm).not.to.equal(null)
  })
})
