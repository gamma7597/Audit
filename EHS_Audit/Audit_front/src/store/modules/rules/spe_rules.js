import Axios from 'axios'

const url = 'https://conformite.engie-homeservices.fr/'

const state = () => ({
  spe_rules: {},
  spe_longueur: 0
})

const actions = {
  get_spe_rules: ({ commit }, payload) => {
    Axios.get(url + 'api/spe_rules/' + payload)
    .then(response => {
      commit('GET_SPE_RULES', response)
    })
  },
  add_spe_rules: ({ commit }, payload) => {
    Axios.post(url + 'api/spe_rules/' + payload.company, payload.data)
    .then(response => {
      commit('ADD_SPE_RULES', response.data)
    })
  },
  edit_spe_rules: ({ commit }, payload) => {
    Axios.put(url + 'api/spe_rules/' + payload.company, payload.data)
    .then( () => {
      Axios.get(url + 'api/spe_rules/' + payload.company)
      .then(response => {
        commit('GET_SPE_RULES_2', response.data)
      })
    })
  }
}

const mutations = {
  ADD_SPE_RULES(state, rules) {
    state.spe_rules = rules
  },
  GET_SPE_RULES(state, rules) {
    state.spe_longueur = rules.data.length,
    state.spe_rules = rules.data[0]
  },
  GET_SPE_RULES_2(state, rules) {
    state.spe_longueur = rules.length,
    state.spe_rules = rules[0]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
