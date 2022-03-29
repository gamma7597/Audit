import Axios from "axios"
import { url } from '../axiosUrl'

const state = () => ({
  ca_rules: {},
  ca_longueur: 0
})

const actions = {
  get_ca_rules: ({ commit }, payload) => {
    Axios.get(url + 'api/ca_rules/' + payload)
    .then(response => {
      commit('GET_CA_RULES', response)
    })
  },
  add_ca_rules: ({ commit }, payload) => {
    Axios.post(url + 'api/ca_rules/' + payload.company, payload.data)
    .then(response => {
      commit('ADD_CA_RULES', response.data)
    })
  },
  edit_ca_rules: ({ commit }, payload) => {
    Axios.put(url + 'api/ca_rules/' + payload.company, payload.data)
    .then( () => {
      Axios.get(url + 'api/ca_rules/' + payload.company)
      .then(response => {
        commit('GET_CA_RULES_2', response.data)
      })
    })
  }
}

const mutations = {
  ADD_CA_RULES(state, rules) {
    state.ca_rules = rules
  },
  GET_CA_RULES(state, rules) {
    state.ca_longueur = rules.data.length,
    state.ca_rules = rules.data[0]
  },
  GET_CA_RULES_2(state, rules) {
    state.ca_longueur = rules.length,
    state.ca_rules = rules[0]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
