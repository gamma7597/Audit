import Axios from "axios"
import { url } from './axiosUrl'

const state = () => ({
  contacts: []
})

const actions = {
  getContacts: ({ commit }, payload) => {
    Axios.get(url + 'api/contacts/' + payload)
    .then(response => {
      commit('GET_CONTACTS', response.data)
    })
  },
  addContact: ({ commit }, payload) => {
    Axios.post(url + 'api/contacts/' + payload.company, payload.data)
    .then(response => {
      commit('ADD_CONTACT', response.data)
    })
  },
  editContact: ({ commit }, payload) => {
    Axios.put(url + 'api/contacts/' + payload.company + '/' + payload.last_name, payload.data)
    .then( () => {
      Axios.get(url + 'api/contacts/' + payload.company)
      .then(response => {
        commit('GET_CONTACTS', response.data)
      })
    })
  },
  removeContact: ({ commit }, payload) => {
    Axios.delete(url + 'api/contacts/' + payload.company + '/' + payload.last_name)
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
