import Axios from "axios"
import { url } from './axiosUrl'
import Vue from 'vue'

const state = () => ({
  maturites: {},
  listMaturites: []
})

const getters = {
  active_maturites(state){
    return state.maturites;
  }
}

const actions = {
  getMaturites: ({ commit }) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.get(url + 'api/maturites/', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_MATURITES', response.data)
    })
  },
  addMaturites: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.post(url + 'api/maturites/', payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_MATURITES', response.data)
    })
  },
  editMaturites: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.put(url + 'api/maturites/' + payload.company, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( response => {
      commit('EDIT_MATURITES', response)
    })
  },
}

const mutations = {
  ADD_MATURITES(state, maturites) {
    state.maturites = maturites
  },
  GET_MATURITES(state, maturites) {
    state.listMaturites = maturites
  },
  EDIT_MATURITES(state, maturites) {
    Vue.set(state.maturites, maturites)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
