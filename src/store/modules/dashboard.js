import AxiosServices from '@/services/AxiosServices.js'

export const namespaced = true

export const state = {
  kpis: [],
  kpi: {},
  ultimasOrdenes: [],
  ultimaOrden: {},
  ultimasDevoluciones: [],
  ultimaDevolucion: {},
}

export const mutations = {
  GET_KPIS(state, kpis) {
    state.kpis = kpis
  },
  GET_ULTIMAS_ORDENES(state, ultimasOrdenes) {
    state.ultimasOrdenes = ultimasOrdenes
  },
  GET_ULTIMAS_DEVOLUCIONES(state, ultimasDevoluciones) {
    state.ultimasDevoluciones = ultimasDevoluciones
  },
}

export const actions = {
  getDashboard({ commit }) {
    return AxiosServices.getDashboard()
      .then((response) => {
        commit('GET_ULTIMAS_DEVOLUCIONES', response.data.ultimas_devoluciones)
        commit('GET_KPIS', response.data.kpis)
        commit('GET_ULTIMAS_ORDENES', response.data.utimas_ordenes)
      })
      .catch((error) => {
        console.log(`There was an error: ${error.message}`)
      })
  },
}
