import Vue from 'vue'
import About from '@/pages/settings/About'

describe('@/pages/settings/About.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(About)
    }).$mount()

    expect(vm).not.to.equal(null)
  })
})
