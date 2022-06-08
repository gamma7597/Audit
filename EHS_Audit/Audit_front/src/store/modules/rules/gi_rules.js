import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  gi_rules: {}
})

const getters = {
  active_gi_rules(state){
    return state.gi_rules;
  }
}

const actions = {
  get_gi_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.get(url + 'api/gi_rules/' + payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_GI_RULES', response)
    })
  },
  add_gi_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.post(url + 'api/gi_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_GI_RULES', response.data)
    })
  },
  edit_gi_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.put(url + 'api/gi_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( response => {
      commit('EDIT_GI_RULES', response)
    })
  }
}

const mutations = {
  ADD_GI_RULES(state, rules) {
    state.gi_rules = rules
  },
  GET_GI_RULES(state, rules) {
    state.gi_rules = rules.data[0]
  },
  EDIT_GI_RULES(state, rules) {
    Vue.set(state.gi_rules, rules)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
