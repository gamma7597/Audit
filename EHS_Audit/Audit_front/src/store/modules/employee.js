import Axios from "axios"
import { url } from './axiosUrl'

const state = () => ({
  employees: []
})

const actions = {
  getEmployees: ({ commit }, payload) => {
    Axios.get(url + 'api/employees/' + payload)
    .then(response => {
      commit('GET_EMPLOYEES', response.data)
    })
  },
  addEmployee: ({ commit }, payload) => {
    Axios.post(url + 'api/employees/' + payload.company, payload.data)
    .then(response => {
      commit('ADD_EMPLOYEE', response.data)
    })
  },
  editEmployee: ({ commit }, payload) => {
    Axios.put(url + 'api/employees/' + payload.company + '/' + payload.last_name, payload.data)
    .then( () => {
      Axios.get(url + 'api/employees/' + payload.company)
      .then(response => {
        commit('GET_EMPLOYEES', response.data)
      })
    })
  },
  removeEmployee: ({ commit }, payload) => {
    Axios.delete(url + 'api/employees/' + payload.company + '/' + payload.last_name)
    .then(response => {
      commit('REMOVE_EMPLOYEE', response.company)
    })
  }
}

const mutations = {
  GET_EMPLOYEES(state, employees) {
    state.employees = employees
  },
  ADD_EMPLOYEE(state, employee) {
    state.employees.push(employee)
  },
  REMOVE_EMPLOYEE(state, employee) {
    state.employees.pop(employee)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
