import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  gca_rules: {}
})

const getters = {
  active_gca_rules(state){
    return state.gca_rules;
  }
}

const actions = {
  get_gca_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.get(url + 'api/gca_rules/' + payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_GCA_RULES', response)
    })
  },
  add_gca_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.post(url + 'api/gca_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_GCA_RULES', response.data)
    })
  },
  edit_gca_rules: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.put(url + 'api/gca_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( response => {
      commit('EDIT_GCA_RULES', response)
    })
  }
}

const mutations = {
  ADD_GCA_RULES(state, rules) {
    state.gca_rules = rules
  },
  GET_GCA_RULES(state, rules) {
    state.gca_rules = rules.data[0]
  },
  EDIT_GCA_RULES(state, rules) {
    Vue.set(state.gca_rules, rules)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
