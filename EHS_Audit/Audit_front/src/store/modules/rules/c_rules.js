import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  c_rules: {}
})

const getters = {
  active_c_rules(state){
    return state.c_rules;
  }
}

const actions = {
  get_c_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.get(url + 'api/c_rules/' + payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_C_RULES', response)
    })
  },
  add_c_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.post(url + 'api/c_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_C_RULES', response.data)
    })
  },
  edit_c_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.put(url + 'api/c_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( response => {
      commit('EDIT_C_RULES', response)
    })
  }
}

const mutations = {
  ADD_C_RULES(state, rules) {
    state.c_rules = rules
  },
  GET_C_RULES(state, rules) {
    state.c_rules = rules.data[0]
  },
  EDIT_C_RULES(state, rules) {
    Vue.set(state.c_rules, rules)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
