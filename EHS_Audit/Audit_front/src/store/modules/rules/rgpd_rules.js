import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  rgpd_rules: {}
})

const getters = {
  active_rgpd_rules(state){
    return state.rgpd_rules;
  }
}

const actions = {
  get_rgpd_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.get(url + 'api/rgpd_rules/' + payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_RGPD_RULES', response)
    })
  },
  add_rgpd_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.post(url + 'api/rgpd_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_RGPD_RULES', response.data)
    })
  },
  edit_rgpd_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.put(url + 'api/rgpd_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( response => {
      commit('EDIT_RGPD_RULES', response)
    })
  }
}

const mutations = {
  ADD_RGPD_RULES(state, rules) {
    state.rgpd_rules = rules
  },
  GET_RGPD_RULES(state, rules) {
    state.rgpd_rules = rules.data[0]
  },
  EDIT_RGPD_RULES(state, rules) {
    Vue.set(state.rgpd_rules, rules)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
