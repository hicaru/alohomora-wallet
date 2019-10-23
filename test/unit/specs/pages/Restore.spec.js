import Vue from 'vue'
import Restore from '@/pages/Restore'

describe('@/pages/Restore.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Restore)
    }).$mount()

    expect(vm).not.to.equal(null)
  })
})
