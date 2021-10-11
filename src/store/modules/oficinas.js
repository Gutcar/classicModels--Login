import AxiosServices from '@/services/AxiosServices.js'

export const namespaced = true

export const state = {
  oficinas: [],
  oficina: {},
}

export const mutations = {
  GET_OFICINAS(state, oficinas) {
    state.oficinas = oficinas
  },
}

export const actions = {
  getOficinas({ commit }) {
    return AxiosServices.getOficinas()
      .then((response) => {
        commit('GET_OFICINAS', response.data.oficinas)
      })
      .catch((error) => {
        console.log(`There was an error: ${error.message}`)
      })
  },
}
