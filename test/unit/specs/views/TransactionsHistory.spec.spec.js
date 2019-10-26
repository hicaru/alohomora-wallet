import Vue from 'vue'
import TransactionsHistory from '@/views/TransactionsHistory'

describe('@/views/TransactionsHistory', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(TransactionsHistory)
    }).$mount()

    expect(vm).not.to.equal(null)
  })
})
