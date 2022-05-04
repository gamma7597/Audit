import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  a_rules: {},
  a_longueur: 0
})

const actions = {
  get_a_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.get(url + 'api/a_rules/' + payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_A_RULES', response)
    })
  },
  add_a_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.post(url + 'api/a_rules/' + payload.company, payload.data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_A_RULES', response.data)
    })
  },
  edit_a_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.put(url + 'api/a_rules/' + payload.company, payload.data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( () => {
      Axios.get(url + 'api/a_rules/' + payload.company, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then(response => {
        commit('GET_A_RULES_2', response.data)
      })
    })
  }
}

const mutations = {
  ADD_A_RULES(state, rules) {
    state.a_rules = rules
  },
  GET_A_RULES(state, rules) {
    state.a_longueur = rules.data.length,
    state.a_rules = rules.data[0]
  },
  GET_A_RULES_2(state, rules) {
    state.a_longueur = rules.length,
    state.a_rules = rules[0]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
