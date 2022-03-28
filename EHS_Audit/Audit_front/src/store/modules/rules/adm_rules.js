import Axios from 'axios'

const url = 'https://conformite.engie-homeservices.fr/'

const state = () => ({
  adm_rules: {},
  adm_longueur: 0
})

const actions = {
  get_adm_rules: ({ commit }, payload) => {
    Axios.get(url + 'api/adm_rules/' + payload)
    .then(response => {
      commit('GET_ADM_RULES', response)
    })
  },
  add_adm_rules: ({ commit }, payload) => {
    Axios.post(url + 'api/adm_rules/' + payload.company, payload.data)
    .then(response => {
      commit('ADD_ADM_RULES', response.data)
    })
  },
  edit_adm_rules: ({ commit }, payload) => {
    Axios.put(url + 'api/adm_rules/' + payload.company, payload.data)
    .then( () => {
      Axios.get(url + 'api/adm_rules/' + payload.company)
      .then(response => {
        commit('GET_ADM_RULES_2', response.data)
      })
    })
  }
}

const mutations = {
  ADD_ADM_RULES(state, rules) {
    state.adm_rules = rules
  },
  GET_ADM_RULES(state, rules) {
    state.adm_longueur = rules.data.length,
    state.adm_rules = rules.data[0]
  },
  GET_ADM_RULES_2(state, rules) {
    state.adm_longueur = rules.length,
    state.adm_rules = rules[0]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
