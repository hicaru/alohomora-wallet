import Vue from 'vue'
import Create from '@/pages/Create'

describe('@/pages/Create.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Create)
    }).$mount()

    expect(vm).not.to.equal(null)
  })
})
