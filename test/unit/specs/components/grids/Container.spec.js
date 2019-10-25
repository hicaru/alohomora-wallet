import Vue from 'vue'
import Container from '@/components/grids/Container'

describe('@/components/grids/Container', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Container)
    }).$mount()

    expect(vm).not.to.equal(null)
  })
})
