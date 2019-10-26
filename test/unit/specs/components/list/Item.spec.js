import Vue from 'vue'
import Item from '@/components/list/Item'

describe('@/components/list/Item', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Item)
    }).$mount()

    expect(vm).not.to.equal(null)
  })
})
