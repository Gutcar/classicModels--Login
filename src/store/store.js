import Vue from "vue";
import Vuex from "vuex";
//import AxiosServices from '@/services/AxiosServices.js'

import * as Dashboard from '@/store/modules/dashboard.js'
import * as Estados from '@/store/modules/estados.js'
import * as Oficinas from '@/store/modules/oficinas.js'
import * as Ordenes from '@/store/modules/ordenes.js'
import * as DetalleOrdenes from '@/store/modules/detalleOrden.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Dashboard,
    Estados,
    Oficinas,
    Ordenes,
    DetalleOrdenes
  },
});
