import Vue from 'vue'
import Preview from '@/pages/Preview'

describe('@/pages/Preview.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Preview)
    }).$mount()

    expect(vm).not.to.equal(null)
  })
})
