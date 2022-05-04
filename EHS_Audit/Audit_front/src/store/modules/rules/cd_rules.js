import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  cd_rules: {},
  cd_longueur: 0
})

const actions = {
  get_cd_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.get(url + 'api/cd_rules/' + payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_CD_RULES', response)
    })
  },
  add_cd_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.post(url + 'api/cd_rules/' + payload.company, payload.data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_CD_RULES', response.data)
    })
  },
  edit_cd_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.put(url + 'api/cd_rules/' + payload.company, payload.data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( () => {
      Axios.get(url + 'api/cd_rules/' + payload.company, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then(response => {
        commit('GET_CD_RULES_2', response.data)
      })
    })
  }
}

const mutations = {
  ADD_CD_RULES(state, rules) {
    state.cd_rules = rules
  },
  GET_CD_RULES(state, rules) {
    state.cd_longueur = rules.data.length,
    state.cd_rules = rules.data[0]
  },
  GET_CD_RULES_2(state, rules) {
    state.cd_longueur = rules.length,
    state.cd_rules = rules[0]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
