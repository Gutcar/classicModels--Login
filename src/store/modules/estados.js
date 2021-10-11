import AxiosServices from '@/services/AxiosServices.js'

export const namespaced = true

export const state = {
  estados: [],
  estado: {},
}

export const mutations = {
  GET_ESTADOS(state, estados) {
    state.estados = estados
  },
}

export const actions = {
  getEstados({ commit }) {
    return AxiosServices.getEstados()
      .then((response) => {
        commit('GET_ESTADOS', response.data.estados)
      })
      .catch((error) => {
        console.log(`There was an error: ${error.message}`)
      })
  },
}
