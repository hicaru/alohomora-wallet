import Vue from 'vue'
import General from '@/pages/settings/General'

describe('@/pages/settings/General.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(General)
    }).$mount()

    expect(vm).not.to.equal(null)
  })
})
