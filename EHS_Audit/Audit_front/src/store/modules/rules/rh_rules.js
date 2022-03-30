import Axios from "axios"
import { url } from '../axiosUrl'

const state = () => ({
  rh_rules: {},
  rh_longueur: 0
})

const actions = {
  get_rh_rules: ({ commit }, payload) => {
    Axios.get(url + 'api/rh_rules/' + payload)
    .then(response => {
      commit('GET_RH_RULES', response)
    })
  },
  add_rh_rules: ({ commit }, payload) => {
    Axios.post(url + 'api/rh_rules/' + payload.company, payload.data)
    .then(response => {
      commit('ADD_RH_RULES', response.data)
    })
  },
  edit_rh_rules: ({ commit }, payload) => {
    Axios.put(url + 'api/rh_rules/' + payload.company, payload.data)
    .then( () => {
      Axios.get(url + 'api/rh_rules/' + payload.company)
      .then(response => {
        commit('GET_RH_RULES_2', response.data)
      })
    })
  }
}

const mutations = {
  ADD_RH_RULES(state, rules) {
    state.rh_rules = rules
  },
  GET_RH_RULES(state, rules) {
    state.rh_longueur = rules.data.length,
    state.rh_rules = rules.data[0]
  },
  GET_RH_RULES_2(state, rules) {
    state.rh_longueur = rules.length,
    state.rh_rules = rules[0]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
