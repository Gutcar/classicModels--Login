<template>
  <div class="table-responsive tabla--borde">
    <table class="table table-borderless">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Cod Producto</th>
          <th scope="col">Descripción</th>
          <th scope="col">Precio Unit.</th>
          <th scope="col">Cant. Pedido</th>
          <th scope="col">Cant. Pickeado</th>
          <th scope="col">Cumplimiento</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(producto, index) in DetalleOrdenes.detalleProductos"
          :key="index"
        >
          <td>{{ producto.cod_prod }}</td>
          <td>{{ producto.descripcion }}</td>
          <td>{{ producto.precio_unit }}</td>
          <td>{{ producto.cant_pedido }}</td>
          <td>{{ producto.cant_pickeado }}</td>
          <td>
            <b-progress
              :value="(producto.cant_pickeado * 100) / producto.cant_pedido"
              :max="max"
              class="mb-3"
            ></b-progress>
          </td>
          <td>
            <b-icon
              v-if="
                (producto.cant_pickeado * 100) / producto.cant_pedido === 100
              "
              icon="check-circle-fill"
              variant="success"
            ></b-icon>
            <b-icon
              v-if="
                (producto.cant_pickeado * 100) / producto.cant_pedido !== 100
              "
              icon="dash-circle-fill"
              variant="primary"
            ></b-icon>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TablaProductos',
  created() {
    this.$store.dispatch('DetalleOrdenes/getDetalles')
  },
  computed: {
    ...mapState(['DetalleOrdenes']),
  },
}
</script>

<style lang="sass" scoped>
.tabla--borde
    padding: 20px
</style>
