const state = {
  enable: true
}

const mutations = {
  ENABLE (state) {
    state.enable = true
  },
  DISABLE (state) {
    state.enable = false
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('DISABLE')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
