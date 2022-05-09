import Axios from "axios"
import { url } from './axiosUrl'
import Vue from 'vue'

const state = () => ({
  contacts: []
})

const actions = {
  getContacts: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.get(url + 'api/contacts/' + payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_CONTACTS', response.data)
    })
  },
  addContact: ({ commit }, payload) => {
    console.log(payload)
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.post(url + 'api/contacts/' + payload.company, payload.data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_CONTACT', response.data)
    })
  },
  editContact: ({ commit }, payload) => {
    console.log(payload)
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.put(url + 'api/contacts/' + payload.company + '/' + payload.data.last_name, payload.data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then( () => {
      Axios.get(url + 'api/contacts/' + payload.company, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then(response => {
        commit('GET_CONTACTS', response.data)
      })
    })
  },
  removeContact: ({ commit }, payload) => {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    Axios.delete(url + 'api/contacts/' + payload.company + '/' + payload.last_name, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('REMOVE_CONTACT', response.company)
    })
  }
}

const mutations = {
  GET_CONTACTS(state, contacts) {
    state.contacts = contacts
  },
  ADD_CONTACT(state, contact) {
    state.contacts.push(contact)
  },
  REMOVE_CONTACT(state, contact) {
    state.contacts.pop(contact)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
