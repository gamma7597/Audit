import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  ie_rules: {},
  ie_longueur: 0
})

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
    Axios.post(url + 'api/ie_rules/' + payload.company, payload.data, {
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
    Axios.put(url + 'api/ie_rules/' + payload.company, payload.data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( () => {
      Axios.get(url + 'api/ie_rules/' + payload.company, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then(response => {
        commit('GET_IE_RULES_2', response.data)
      })
    })
  }
}

const mutations = {
  ADD_IE_RULES(state, rules) {
    state.ie_rules = rules
  },
  GET_IE_RULES(state, rules) {
    state.ie_longueur = rules.data.length,
    state.ie_rules = rules.data[0]
  },
  GET_IE_RULES_2(state, rules) {
    state.ie_longueur = rules.length,
    state.ie_rules = rules[0]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
