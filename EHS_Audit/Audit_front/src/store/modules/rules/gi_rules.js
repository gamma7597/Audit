import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  gi_rules: {},
  gi_longueur: 0
})

const actions = {
  get_gi_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.get(url + 'api/gi_rules/' + payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_GI_RULES', response)
    })
  },
  add_gi_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.post(url + 'api/gi_rules/' + payload.company, payload.data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_GI_RULES', response.data)
    })
  },
  edit_gi_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.put(url + 'api/gi_rules/' + payload.company, payload.data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( () => {
      Axios.get(url + 'api/gi_rules/' + payload.company, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then(response => {
        commit('GET_GI_RULES_2', response.data)
      })
    })
  }
}

const mutations = {
  ADD_GI_RULES(state, rules) {
    state.gi_rules = rules
  },
  GET_GI_RULES(state, rules) {
    state.gi_longueur = rules.data.length,
    state.gi_rules = rules.data[0]
  },
  GET_GI_RULES_2(state, rules) {
    state.gi_longueur = rules.length,
    state.gi_rules = rules[0]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
