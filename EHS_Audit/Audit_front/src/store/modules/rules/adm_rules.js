import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  adm_rules: {}
})

const getters = {
  active_adm_rules(state){
    return state.adm_rules;
  }
}

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
    Axios.post(url + 'api/adm_rules/' + payload.company, payload, {
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
    Axios.put(url + 'api/adm_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( response => {
      commit('EDIT_ADM_RULES', response)
    })
  }
}

const mutations = {
  ADD_ADM_RULES(state, rules) {
    state.adm_rules = rules
  },
  GET_ADM_RULES(state, rules) {
    state.adm_rules = rules.data[0]
  },
  EDIT_ADM_RULES(state, rules) {
    Vue.set(state.adm_rules, rules)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
