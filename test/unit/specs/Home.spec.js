import Vue from 'vue'
import Home from '@/pages/Home'

describe('pages:Home.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Home)
    }).$mount()

    expect(vm.$el.querySelector('.title').textContent).to.contain('Welcome to your new project!')
  })
})
