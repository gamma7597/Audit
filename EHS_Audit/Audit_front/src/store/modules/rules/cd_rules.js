import Axios from 'axios'

const url = 'https://conformite.engie-homeservices.fr/'

const state = () => ({
  cd_rules: {},
  cd_longueur: 0
})

const actions = {
  get_cd_rules: ({ commit }, payload) => {
    Axios.get(url + 'api/cd_rules/' + payload)
    .then(response => {
      commit('GET_CD_RULES', response)
    })
  },
  add_cd_rules: ({ commit }, payload) => {
    Axios.post(url + 'api/cd_rules/' + payload.company, payload.data)
    .then(response => {
      commit('ADD_CD_RULES', response.data)
    })
  },
  edit_cd_rules: ({ commit }, payload) => {
    Axios.put(url + 'api/cd_rules/' + payload.company, payload.data)
    .then( () => {
      Axios.get(url + 'api/cd_rules/' + payload.company)
      .then(response => {
        commit('GET_CD_RULES_2', response.data)
      })
    })
  }
}

const mutations = {
  ADD_CD_RULES(state, rules) {
    state.cd_rules = rules
  },
  GET_CD_RULES(state, rules) {
    state.cd_longueur = rules.data.length,
    state.cd_rules = rules.data[0]
  },
  GET_CD_RULES_2(state, rules) {
    state.cd_longueur = rules.length,
    state.cd_rules = rules[0]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
