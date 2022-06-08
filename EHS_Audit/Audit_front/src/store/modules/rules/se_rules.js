import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  se_rules: {}
})

const getters = {
  active_se_rules(state){
    return state.se_rules;
  }
}

const actions = {
  get_se_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.get(url + 'api/se_rules/' + payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_SE_RULES', response)
    })
  },
  add_se_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.post(url + 'api/se_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_SE_RULES', response.data)
    })
  },
  edit_se_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.put(url + 'api/se_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( response => {
      commit('EDIT_SE_RULES', response)
    })
  }
}

const mutations = {
  ADD_SE_RULES(state, rules) {
    state.se_rules = rules
  },
  GET_SE_RULES(state, rules) {
    state.se_rules = rules.data[0]
  },
  EDIT_SE_RULES(state, rules) {
    Vue.set(state.se_rules, rules)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
