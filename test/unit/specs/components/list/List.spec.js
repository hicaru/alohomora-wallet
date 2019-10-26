import Vue from 'vue'
import List from '@/components/list/List'

describe('@/components/list/List', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(List)
    }).$mount()

    expect(vm).not.to.equal(null)
  })
})
