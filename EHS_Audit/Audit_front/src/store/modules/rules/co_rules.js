import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  co_rules: {}
})

const getters = {
  active_co_rules(state){
    return state.co_rules;
  }
}

const actions = {
  get_co_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.get(url + 'api/co_rules/' + payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_CO_RULES', response)
    })
  },
  add_co_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.post(url + 'api/co_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_CO_RULES', response.data)
    })
  },
  edit_co_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.put(url + 'api/co_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( response => {
      commit('EDIT_CO_RULES', response)
    })
  }
}

const mutations = {
  ADD_CO_RULES(state, rules) {
    state.co_rules = rules
  },
  GET_CO_RULES(state, rules) {
    state.co_rules = rules.data[0]
  },
  EDIT_CO_RULES(state, rules) {
    Vue.set(state.co_rules, rules)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
