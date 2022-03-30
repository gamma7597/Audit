import Axios from "axios"
import { url } from '../axiosUrl'

const state = () => ({
  se_rules: {},
  se_longueur: 0
})

const actions = {
  get_se_rules: ({ commit }, payload) => {
    Axios.get(url + 'api/se_rules/' + payload)
    .then(response => {
      commit('GET_SE_RULES', response)
    })
  },
  add_se_rules: ({ commit }, payload) => {
    Axios.post(url + 'api/se_rules/' + payload.company, payload.data)
    .then(response => {
      commit('ADD_SE_RULES', response.data)
    })
  },
  edit_se_rules: ({ commit }, payload) => {
    Axios.put(url + 'api/se_rules/' + payload.company, payload.data)
    .then( () => {
      Axios.get(url + 'api/se_rules/' + payload.company)
      .then(response => {
        commit('GET_SE_RULES_2', response.data)
      })
    })
  }
}

const mutations = {
  ADD_SE_RULES(state, rules) {
    state.se_rules = rules
  },
  GET_SE_RULES(state, rules) {
    state.se_longueur = rules.data.length,
    state.se_rules = rules.data[0]
  },
  GET_SE_RULES_2(state, rules) {
    state.se_longueur = rules.length,
    state.se_rules = rules[0]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
