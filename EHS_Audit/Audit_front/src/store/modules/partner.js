import { url } from './axiosUrl'
import Axios from 'axios'
import Vue from 'vue'

const state = () => ({
  partners: [],
  partner: {}
})

const actions = {
  getPartners: ({ commit }) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.get(url + 'api/partners/', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_PARTNERS', response.data)
    })
  },
  getOnePartner: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.get(url + 'api/partners/' + payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
     commit('GET_ONE_PARTNER', response.data)
    })
  },
  addPartner: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.post(url + 'api/partners/', payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_PARTNERS', response.data)
    })
  },
  editPartner: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.put(url + 'api/partners/' + payload.company, payload.data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( () => {
      Axios.get(url + 'api/partners/' + payload.company, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then(response => {
        commit('GET_ONE_PARTNER', response.data)
      })
    })
  },
  removePartner: ({ commit }, payload) => {
    Axios.delete(url + 'api/partners/' + payload)
    .then(response => {
      commit('REMOVE_PARTNER', response.data)
    })
  }
}

const mutations = {
  GET_PARTNERS(state, partners) {
    state.partners = partners
  },
  GET_ONE_PARTNER(state, partner) {
    state.partner = partner
  },
  ADD_PARTNERS(state, partner) {
    state.partners.push(partner)
  },
  REMOVE_PARTNER(state, partner) {
    state.partners.pop(partner)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
