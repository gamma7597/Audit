import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  g_rules: {},
  g_longueur: 0
})

const actions = {
  get_g_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.get(url + 'api/g_rules/' + payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_G_RULES', response)
    })
  },
  add_g_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.post(url + 'api/g_rules/' + payload.company, payload.data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_G_RULES', response.data)
    })
  },
  edit_g_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.put(url + 'api/g_rules/' + payload.company, payload.data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( () => {
      Axios.get(url + 'api/g_rules/' + payload.company, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then(response => {
        commit('GET_G_RULES_2', response.data)
      })
    })
  }
}

const mutations = {
  ADD_G_RULES(state, rules) {
    state.g_rules = rules
  },
  GET_G_RULES(state, rules) {
    state.g_longueur = rules.data.length,
    state.g_rules = rules.data[0]
  },
  GET_G_RULES_2(state, rules) {
    state.g_longueur = rules.length,
    state.g_rules = rules[0]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
