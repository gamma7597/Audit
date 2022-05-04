import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  rgpd_rules: {},
  rgpd_longueur: 0
})

const actions = {
  get_rgpd_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.get(url + 'api/rgpd_rules/' + payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_RGPD_RULES', response)
    })
  },
  add_rgpd_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.post(url + 'api/rgpd_rules/' + payload.company, payload.data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_RGPD_RULES', response.data)
    })
  },
  edit_rgpd_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.put(url + 'api/rgpd_rules/' + payload.company, payload.data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( () => {
      Axios.get(url + 'api/rgpd_rules/' + payload.company, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then(response => {
        commit('GET_RGPD_RULES_2', response.data)
      })
    })
  }
}

const mutations = {
  ADD_RGPD_RULES(state, rules) {
    state.rgpd_rules = rules
  },
  GET_RGPD_RULES(state, rules) {
    state.rgpd_longueur = rules.data.length,
    state.rgpd_rules = rules.data[0]
  },
  GET_RGPD_RULES_2(state, rules) {
    state.rgpd_longueur = rules.length,
    state.rgpd_rules = rules[0]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
