import Vue from 'vue'
import Row from '@/components/grids/Row'

describe('@/components/grids/Column', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Row)
    }).$mount()

    expect(vm).not.to.equal(null)
  })
})
