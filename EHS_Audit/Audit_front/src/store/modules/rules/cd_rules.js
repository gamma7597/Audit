import Axios from "axios"
import { url } from '../axiosUrl'
import Vue from 'vue'

const state = () => ({
  cd_rules: {}
})

const getters = {
  active_cd_rules(state){
    return state.cd_rules;
  }
}

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
    Axios.post(url + 'api/cd_rules/' + payload.company, payload, {
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
    Axios.put(url + 'api/cd_rules/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( response => {
      commit('EDIT_CD_RULES', response)
    })
  }
}

const mutations = {
  ADD_CD_RULES(state, rules) {
    state.cd_rules = rules
  },
  GET_CD_RULES(state, rules) {
    state.cd_rules = rules.data[0]
  },
  EDIT_CD_RULES(state, rules) {
    Vue.set(state.cd_rules, rules)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
