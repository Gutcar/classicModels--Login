import AxiosServices from '@/services/AxiosServices.js'

export const namespaced = true

export const state = {
  detalleOrden: {},
  detalleCliente: {},
  detalleProductos: [],
}

export const mutations = {
  GET_DETALLE_ORDEN(state, detalleOrden) {
    state.detalleOrden = detalleOrden
  },
  GET_DETALLE_CLIENTE(state, detalleCliente) {
    state.detalleCliente = detalleCliente
  },
  GET_DETALLE_PRODUCTOS(state, detalleProductos) {
    state.detalleProductos = detalleProductos
  },
}

export const actions = {
  getDetalles({ commit }) {
    return AxiosServices.getDetalles()
      .then((response) => {
        commit('GET_DETALLE_ORDEN', response.data.orden)
        commit('GET_DETALLE_CLIENTE', response.data.cliente)
        commit('GET_DETALLE_PRODUCTOS', response.data.productos)
      })
      .catch((error) => {
        console.log(`There was an error: ${error.message}`)
      })
  },
}
