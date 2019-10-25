import Vue from 'vue'
import Column from '@/components/grids/Column'

describe('@/components/grids/Column', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Column)
    }).$mount()

    expect(vm).not.to.equal(null)
  })
})
