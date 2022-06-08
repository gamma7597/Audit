import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  a_rules: {}
})

const getters = {
  active_a_rules(state){
    return state.a_rules;
  }
}

const actions = {
  get_a_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.get(url + 'api/a_rules/' + payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_A_RULES', response)
    })
  },
  add_a_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.post(url + 'api/a_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_A_RULES', response.data)
    })
  },
  edit_a_rules: ({ commit }, payload) => {
    console.log(payload)
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.put(url + 'api/a_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( response => {
      console.log(response)
      commit('EDIT_A_RULES', response)
    })
  }
}

const mutations = {
  ADD_A_RULES(state, rules) {
    state.a_rules = rules
  },
  GET_A_RULES(state, rules) {
    state.a_rules = rules.data[0]
  },
  EDIT_A_RULES(state, rules) {
    Vue.set(state.a_rules, rules)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
