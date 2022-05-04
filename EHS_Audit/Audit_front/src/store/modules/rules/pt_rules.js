import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  pt_rules: {},
  pt_longueur: 0
})

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
    Axios.post(url + 'api/pt_rules/' + payload.company, payload.data, {
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
    Axios.put(url + 'api/pt_rules/' + payload.company, payload.data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( () => {
      Axios.get(url + 'api/pt_rules/' + payload.company, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then(response => {
        commit('GET_PT_RULES_2', response.data)
      })
    })
  }
}

const mutations = {
  ADD_PT_RULES(state, rules) {
    state.pt_rules = rules
  },
  GET_PT_RULES(state, rules) {
    state.pt_longueur = rules.data.length,
    state.pt_rules = rules.data[0]
  },
  GET_PT_RULES_2(state, rules) {
    state.pt_longueur = rules.length,
    state.pt_rules = rules[0]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
