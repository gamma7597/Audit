import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  spe_rules: {}
})

const getters = {
  active_spe_rules(state){
    return state.spe_rules;
  }
}

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
    Axios.post(url + 'api/spe_rules/' + payload.company, payload, {
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
    Axios.put(url + 'api/spe_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( response => {
      commit('EDIT_SPE_RULES', response)
    })
  }
}

const mutations = {
  ADD_SPE_RULES(state, rules) {
    state.spe_rules = rules
  },
  GET_SPE_RULES(state, rules) {
    state.spe_rules = rules.data[0]
  },
  EDIT_SPE_RULES(state, rules) {
    Vue.set(state.spe_rules, rules)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
