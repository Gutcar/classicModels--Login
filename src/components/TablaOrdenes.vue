<template>
  <div class="table-responsive tabla--borde">
    <table class="table table-striped table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">N°Orden</th>
          <th scope="col">Cliente</th>
          <th scope="col">Monto Orden</th>
          <th scope="col">Cant. Productos</th>
          <th scope="col">Fecha Entrega</th>
          <th scope="col">Avance Preparación</th>
          <th scope="col">Estado</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(orden, index) in Ordenes.ordenes" :key="index">
          <td>{{ orden.num_orden }}</td>
          <td>{{ orden.cliente }}</td>
          <td>{{ orden.monto }}</td>
          <td>{{ orden.cant_productos }}</td>
          <td>{{ orden.fecha_entrega }}</td>
          <td>
            <b-progress
              :value="orden.avance_preparacion * 100"
              :max="max"
              class="mb-3"
            ></b-progress>
          </td>
          <td>{{ orden.estado }}</td>
          <td>
            <b-icon
              v-if="(orden.estado === 'Ingresado')"
              icon="record-circle-fill"
              variant="primary"
            ></b-icon>
            <b-icon
              v-if="(orden.estado === 'Preparacion')"
              icon="dash-circle-fill"
              variant="primary"
            ></b-icon>
            <b-icon
              v-if="(orden.estado === 'Entregado')"
              icon="check-circle-fill"
              variant="success"
            ></b-icon>
          </td>
          <td>
            <router-link :to="{ name: 'ordenes-detalle' }"
              ><b-button type="button" variant="outline-primary" size="sm"
                >Detalle</b-button
              ></router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
    <nav class="my-3">
      <ul class="pagination">
        <li class="page-item active"><a class="page-link">1</a></li>
        <li class="page-item"><a class="page-link">2</a></li>
        <li class="page-item"><a class="page-link">3</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Tabla',
  created() {
    this.$store.dispatch('Ordenes/getOrdenes')
  },
  computed: {
    ...mapState(['Ordenes']),
  },
}
</script>

<style lang="sass" scoped>
.tabla--borde
    padding: 20px
</style>
