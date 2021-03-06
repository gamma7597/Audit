import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  tdt_rules: {}
})

const getters = {
  active_tdt_rules(state){
    return state.tdt_rules;
  }
}

const actions = {
  get_tdt_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.get(url + 'api/tdt_rules/' + payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_TDT_RULES', response)
    })
  },
  add_tdt_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.post(url + 'api/tdt_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_TDT_RULES', response.data)
    })
  },
  edit_tdt_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.put(url + 'api/tdt_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( response => {
      commit('EDIT_TDT_RULES', response)
    })
  }
}

const mutations = {
  ADD_TDT_RULES(state, rules) {
    state.tdt_rules = rules
  },
  GET_TDT_RULES(state, rules) {
    state.tdt_rules = rules.data[0]
  },
  EDIT_TDT_RULES(state, rules) {
    Vue.set(state.tdt_rules, rules)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
