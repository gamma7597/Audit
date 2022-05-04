import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  rf_rules: {},
  rf_longueur: 0
})

const actions = {
  get_rf_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.get(url + 'api/rf_rules/' + payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_RF_RULES', response)
    })
  },
  add_rf_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.post(url + 'api/rf_rules/' + payload.company, payload.data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_RF_RULES', response.data)
    })
  },
  edit_rf_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.put(url + 'api/rf_rules/' + payload.company, payload.data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( () => {
      Axios.get(url + 'api/rf_rules/' + payload.company, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then(response => {
        commit('GET_RF_RULES_2', response.data)
      })
    })
  }
}

const mutations = {
  ADD_RF_RULES(state, rules) {
    state.rf_rules = rules
  },
  GET_RF_RULES(state, rules) {
    state.rf_longueur = rules.data.length,
    state.rf_rules = rules.data[0]
  },
  GET_RF_RULES_2(state, rules) {
    state.rf_longueur = rules.length,
    state.rf_rules = rules[0]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
