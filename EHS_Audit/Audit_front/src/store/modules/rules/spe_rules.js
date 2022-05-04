import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  spe_rules: {},
  spe_longueur: 0
})

const actions = {
  get_spe_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.get(url + 'api/spe_rules/' + payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_SPE_RULES', response)
    })
  },
  add_spe_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.post(url + 'api/spe_rules/' + payload.company, payload.data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_SPE_RULES', response.data)
    })
  },
  edit_spe_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.put(url + 'api/spe_rules/' + payload.company, payload.data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( () => {
      Axios.get(url + 'api/spe_rules/' + payload.company, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then(response => {
        commit('GET_SPE_RULES_2', response.data)
      })
    })
  }
}

const mutations = {
  ADD_SPE_RULES(state, rules) {
    state.spe_rules = rules
  },
  GET_SPE_RULES(state, rules) {
    state.spe_longueur = rules.data.length,
    state.spe_rules = rules.data[0]
  },
  GET_SPE_RULES_2(state, rules) {
    state.spe_longueur = rules.length,
    state.spe_rules = rules[0]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
