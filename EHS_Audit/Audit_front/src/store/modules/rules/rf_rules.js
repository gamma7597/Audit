import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  rf_rules: {}
})

const getters = {
  active_rf_rules(state){
    return state.rf_rules;
  }
}

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
    Axios.post(url + 'api/rf_rules/' + payload.company, payload, {
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
    Axios.put(url + 'api/rf_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( response => {
      commit('EDIT_RF_RULES', response)
    })
  }
}

const mutations = {
  ADD_RF_RULES(state, rules) {
    state.rf_rules = rules
  },
  GET_RF_RULES(state, rules) {
    state.rf_rules = rules.data[0]
  },
  EDIT_RF_RULES(state, rules) {
    Vue.set(state.rf_rules, rules)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
