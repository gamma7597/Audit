import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  rh_rules: {}
})

const getters = {
  active_rh_rules(state){
    return state.rh_rules;
  }
}

const actions = {
  get_rh_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.get(url + 'api/rh_rules/' + payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_RH_RULES', response)
    })
  },
  add_rh_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.post(url + 'api/rh_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_RH_RULES', response.data)
    })
  },
  edit_rh_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.put(url + 'api/rh_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( response => {
      commit('EDIT_RH_RULES', response)
    })
  }
}

const mutations = {
  ADD_RH_RULES(state, rules) {
    state.rh_rules = rules
  },
  GET_RH_RULES(state, rules) {
    state.rh_rules = rules.data[0]
  },
  EDIT_RH_RULES(state, rules) {
    Vue.set(state.rh_rules, rules)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
