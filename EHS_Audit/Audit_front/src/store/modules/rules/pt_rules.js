import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  pt_rules: {}
})

const getters = {
  active_pt_rules(state){
    return state.pt_rules;
  }
}

const actions = {
  get_pt_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.get(url + 'api/pt_rules/' + payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_PT_RULES', response)
    })
  },
  add_pt_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.post(url + 'api/pt_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_PT_RULES', response.data)
    })
  },
  edit_pt_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.put(url + 'api/pt_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( response => {
      commit('EDIT_PT_RULES', response)
    })
  }
}

const mutations = {
  ADD_PT_RULES(state, rules) {
    state.pt_rules = rules
  },
  GET_PT_RULES(state, rules) {
    state.pt_rules = rules.data[0]
  },
  EDIT_PT_RULES(state, rules) {
    Vue.set(state.pt_rules, rules)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
