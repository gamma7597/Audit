import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  ca_rules: {}
})

const getters = {
  active_ca_rules(state){
    return state.ca_rules;
  }
}

const actions = {
  get_ca_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.get(url + 'api/ca_rules/' + payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_CA_RULES', response)
    })
  },
  add_ca_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.post(url + 'api/ca_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_CA_RULES', response.data)
    })
  },
  edit_ca_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.put(url + 'api/ca_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( response => {
      commit('EDIT_CA_RULES', response)
    })
  }
}

const mutations = {
  ADD_CA_RULES(state, rules) {
    state.ca_rules = rules
  },
  GET_CA_RULES(state, rules) {
    state.ca_rules = rules.data[0]
  },
  EDIT_CA_RULES(state, rules) {
    Vue.set(state.ca_rules, rules)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
