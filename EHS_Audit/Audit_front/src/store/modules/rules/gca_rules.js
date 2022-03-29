import Axios from "axios"
import { url } from '../axiosUrl'

const state = () => ({
  gca_rules: {},
  gca_longueur: 0
})

const actions = {
  get_gca_rules: ({ commit }, payload) => {
    Axios.get(url + 'api/gca_rules/' + payload)
    .then(response => {
      commit('GET_GCA_RULES', response)
    })
  },
  add_gca_rules: ({ commit }, payload) => {
    Axios.post(url + 'api/gca_rules/' + payload.company, payload.data)
    .then(response => {
      commit('ADD_GCA_RULES', response.data)
    })
  },
  edit_gca_rules: ({ commit }, payload) => {
    Axios.put(url + 'api/gca_rules/' + payload.company, payload.data)
    .then( () => {
      Axios.get(url + 'api/gca_rules/' + payload.company)
      .then(response => {
        commit('GET_GCA_RULES_2', response.data)
      })
    })
  }
}

const mutations = {
  ADD_GCA_RULES(state, rules) {
    state.gca_rules = rules
  },
  GET_GCA_RULES(state, rules) {
    state.gca_longueur = rules.data.length,
    state.gca_rules = rules.data[0]
  },
  GET_GCA_RULES_2(state, rules) {
    state.gca_longueur = rules.length,
    state.gca_rules = rules[0]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
