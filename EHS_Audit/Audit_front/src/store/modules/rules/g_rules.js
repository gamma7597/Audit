import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  g_rules: {}
})

const getters = {
  active_g_rules(state){
    return state.g_rules;
  }
}

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
    Axios.post(url + 'api/g_rules/' + payload.company, payload, {
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
    Axios.put(url + 'api/g_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( response => {
      commit('EDIT_G_RULES', response)
    })
  }
}

const mutations = {
  ADD_G_RULES(state, rules) {
    state.g_rules = rules
  },
  GET_G_RULES(state, rules) {
    state.g_rules = rules.data[0]
  },
  EDIT_G_RULES(state, rules) {
    Vue.set(state.g_rules, rules)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
