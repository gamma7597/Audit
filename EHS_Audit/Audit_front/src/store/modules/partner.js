import { url } from './axiosUrl'
import Axios from 'axios'
import Vue from 'vue'

const state = () => ({
  partners: [],
  partner: {}
})

const getters = {
  partnerList(state){
    return state.partners;
  },
  activePartner(state){
    return state.partner;
  }
}

const actions = {
  async getPartners({ commit }) {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    await Axios.get(url + 'api/partners/', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_PARTNERS', response)
    })
  },
  async getOnePartner({ commit }, payload) {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    await Axios.get(url + 'api/partners/' + payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
     commit('GET_ONE_PARTNER', response)
    })
  },
  async addPartner({ commit }, payload) {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    await Axios.post(url + 'api/partners/', payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_PARTNER', response)
    })
  },
  async editPartner({ commit }, payload) {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    await Axios.put(url + 'api/partners/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('EDIT_PARTNER', response);
    })
  },
  async removePartner({ commit }, payload) {
    await Axios.delete(url + 'api/partners/' + payload)
    .then(response => {
      commit('REMOVE_PARTNER', response)
    })
  }
}

const mutations = {
  GET_PARTNERS(state, partners) {
    state.partners = partners.data
  },
  GET_ONE_PARTNER(state, partner) {
    state.partner = partner.data
  },
  ADD_PARTNER(state, partner) {
    state.partners.push(partner.data)
    state.partner = partner.data
  },
  EDIT_PARTNER(state, partner) {
    Vue.set(state.partner, partner)
  },
  REMOVE_PARTNER(state, partner) {
    state.partners.pop(partner)
  }
}

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
}
