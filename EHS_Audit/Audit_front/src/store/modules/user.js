const state = () => ({
  groups: []
})

const actions = {
  setUser: ({ commit }, tab) => {
    commit('SET_USER', tab)
  }
}

const mutations = {
  SET_USER(state, tab) {
    state.groups = tab
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}