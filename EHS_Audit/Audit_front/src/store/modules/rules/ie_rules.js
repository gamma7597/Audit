import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  ie_rules: {}
})

const getters = {
  active_ie_rules(state){
    return state.ie_rules;
  }
}

const actions = {
  get_ie_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.get(url + 'api/ie_rules/' + payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_IE_RULES', response)
    })
  },
  add_ie_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.post(url + 'api/ie_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_IE_RULES', response.data)
    })
  },
  edit_ie_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.put(url + 'api/ie_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( response => {
      commit('EDIT_IE_RULES', response)
    })
  }
}

const mutations = {
  ADD_IE_RULES(state, rules) {
    state.ie_rules = rules
  },
  GET_IE_RULES(state, rules) {
    state.ie_rules = rules.data[0]
  },
  EDIT_IE_RULES(state, rules) {
    Vue.set(state.ie_rules, rules)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
