import Axios from 'axios'

const url = 'https://conformite.engie-homeservices.fr/'

const state = () => ({
  partners: [],
  partner: {}
})


const actions = {
  getPartners: ({ commit }) => {
    Axios.get(url + 'api/partners/', {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
      commit('GET_PARTNERS', response.data)
    })
    .catch(err => console.log(err))
  },
  getOnePartner: ({ commit }, payload) => {
    Axios.get(url + 'api/partners/' + payload)
    .then(response => {
     commit('GET_ONE_PARTNER', response.data)
    })
  },
  addPartner: ({ commit }, payload) => {
    Axios.post(url + 'api/partners/', payload)
    .then(response => {
      commit('ADD_PARTNERS', response.data)
    })
  },
  editPartner: ({ commit }, payload) => {
    Axios.put(url + 'api/partners/' + payload.company, payload.data)
    .then( () => {
      Axios.get(url + 'api/partners/' + payload.company)
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
