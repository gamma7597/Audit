import Axios from "axios"
import { url } from './axiosUrl'
import Vue from 'vue'

const state = () => ({
  contacts: [],
  contact: {}
})

const getters = {
  contactList(state){
    return state.contacts;
  },
  activeContact(state){
    return state.contact;
  }
}

const actions = {
  async getContacts({ commit }, payload) {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    await Axios.get(url + 'api/contacts/' + payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_CONTACTS', response)
    })
  },
  async getOneContact({ commit }, {company, last_name}) {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    await Axios.get(url + 'api/contacts/' + company + "/" + last_name, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('GET_ONE_CONTACT', response)
    })
  },
  async addContact({ commit }, payload) {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    await Axios.post(url + 'api/contacts/' + payload.company, payload.data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('ADD_CONTACT', response)
    })
  },
  async editContact({ commit }, payload) {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    await Axios.put(url + 'api/contacts/' + payload.company + '/' + payload.last_name, payload, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('EDIT_CONTACT', response)
    })
  },
  async removeContact({ commit }, payload) {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    await Axios.delete(url + 'api/contacts/' + payload.company + '/' + payload.last_name, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      commit('REMOVE_CONTACT', response)
    })  
  }
}

const mutations = {
  GET_CONTACTS(state, contacts) {
    state.contacts = contacts.data
  },
  GET_ONE_CONTACT(state, contact) {
    state.contact = contact.data
  },
  ADD_CONTACT(state, contact) {
    state.contacts.push(contact.data)
  },
  EDIT_CONTACT(state, contact) {
    Vue.set(state.contact, contact)
  },
  REMOVE_CONTACT(state, contact) {
    state.contacts.pop(contact)
  }
}

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
}
