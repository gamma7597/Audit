import Axios from 'axios'

const url = 'https://conformite.engie-homeservices.fr/'

const state = () => ({
  co_rules: {},
  co_longueur: 0
})

const actions = {
  get_co_rules: ({ commit }, payload) => {
    Axios.get(url + 'api/co_rules/' + payload)
    .then(response => {
      commit('GET_CO_RULES', response)
    })
  },
  add_co_rules: ({ commit }, payload) => {
    Axios.post(url + 'api/co_rules/' + payload.company, payload.data)
    .then(response => {
      commit('ADD_CO_RULES', response.data)
    })
  },
  edit_co_rules: ({ commit }, payload) => {
    console.log(payload)
    Axios.put(url + 'api/co_rules/' + payload.company, payload.data)
    .then( () => {
      Axios.get(url + 'api/co_rules/' + payload.company)
      .then(response => {
        commit('GET_CO_RULES_2', response.data)
      })
    })
  }
}

const mutations = {
  ADD_CO_RULES(state, rules) {
    state.co_rules = rules
  },
  GET_CO_RULES(state, rules) {
    state.co_longueur = rules.data.length,
    state.co_rules = rules.data[0]
  },
  GET_CO_RULES_2(state, rules) {
    state.co_longueur = rules.length,
    state.co_rules = rules[0]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
