import AxiosServices from '@/services/AxiosServices.js'

export const namespaced = true

export const state = {
  ordenes: [],
  orden: {},
}

export const mutations = {
  GET_ORDENES(state, ordenes) {
    state.ordenes = ordenes
  },
}

export const actions = {
  getOrdenes({ commit }) {
    return AxiosServices.getOrdenes()
      .then((response) => {
        commit('GET_ORDENES', response.data.ordenes)
      })
      .catch((error) => {
        console.log(`There was an error: ${error.message}`)
      })
  },
}
