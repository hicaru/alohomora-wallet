import Vue from 'vue'
import SideBar from '@/views/SideBar'

describe('@/views/SideBar', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(SideBar)
    }).$mount()

    expect(vm).not.to.equal(null)
  })
})
