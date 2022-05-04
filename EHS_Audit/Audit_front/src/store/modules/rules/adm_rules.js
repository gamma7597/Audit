import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  adm_rules: {},
  adm_longueur: 0
})

const actions = {
  get_adm_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.get(url + 'api/adm_rules/' + payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_ADM_RULES', response)
    })
  },
  add_adm_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.post(url + 'api/adm_rules/' + payload.company, payload.data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_ADM_RULES', response.data)
    })
  },
  edit_adm_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.put(url + 'api/adm_rules/' + payload.company, payload.data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( () => {
      Axios.get(url + 'api/adm_rules/' + payload.company, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then(response => {
        commit('GET_ADM_RULES_2', response.data)
      })
    })
  }
}

const mutations = {
  ADD_ADM_RULES(state, rules) {
    state.adm_rules = rules
  },
  GET_ADM_RULES(state, rules) {
    state.adm_longueur = rules.data.length,
    state.adm_rules = rules.data[0]
  },
  GET_ADM_RULES_2(state, rules) {
    state.adm_longueur = rules.length,
    state.adm_rules = rules[0]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
