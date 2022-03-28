import Axios from 'axios'

const url = 'https://conformite.engie-homeservices.fr/'

const state = () => ({
  c_rules: {},
  c_longueur: 0
})

const actions = {
  get_c_rules: ({ commit }, payload) => {
    Axios.get(url + 'api/c_rules/' + payload)
    .then(response => {
      commit('GET_C_RULES', response)
    })
  },
  add_c_rules: ({ commit }, payload) => {
    Axios.post(url + 'api/c_rules/' + payload.company, payload.data)
    .then(response => {
      commit('ADD_C_RULES', response.data)
    })
  },
  edit_c_rules: ({ commit }, payload) => {
    Axios.put(url + 'api/c_rules/' + payload.company, payload.data)
    .then( () => {
      Axios.get(url + 'api/c_rules/' + payload.company)
      .then(response => {
        commit('GET_C_RULES_2', response.data)
      })
    })
  }
}

const mutations = {
  ADD_C_RULES(state, rules) {
    state.c_rules = rules
  },
  GET_C_RULES(state, rules) {
    state.c_longueur = rules.data.length,
    state.c_rules = rules.data[0]
  },
  GET_C_RULES_2(state, rules) {
    state.c_longueur = rules.length,
    state.c_rules = rules[0]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
