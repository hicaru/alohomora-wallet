import Vue from 'vue'
import Security from '@/pages/settings/Security'

describe('@/pages/settings/Security.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Security)
    }).$mount()

    expect(vm).not.to.equal(null)
  })
})
