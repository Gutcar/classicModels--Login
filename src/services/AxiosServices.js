import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getDashboard() {
    return apiClient.get('/dashboard.json')
  },
  getOficinas() {
    return apiClient.get('/oficinas.json')
  },
  getEstados() {
    return apiClient.get('/estados.json')
  },
  getOrdenes() {
    return apiClient.get('/ordenes.json')
  },
  getDetalles() {
    return apiClient.get('/detalle_orden.json')
  }
}
