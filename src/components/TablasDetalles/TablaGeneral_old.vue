<template>
  <div class="table-responsive tabla--borde">
    <table class="table table-borderless">
      <tbody>
        <tr>
          <th class="tabla__notbold" scope="row">N° Orden</th>
          <td>
            {{ DetalleOrdenes.detalleOrden.num_orden }}
          </td>
        </tr>
        <tr>
          <th class="tabla__notbold" scope="row">Monto Orden</th>
          <td>
            {{ DetalleOrdenes.detalleOrden.monto }}
          </td>
        </tr>
        <tr>
          <th class="tabla__notbold" scope="row">Cant Productos</th>
          <td>
            {{ DetalleOrdenes.detalleOrden.cant_productos }}
          </td>
        </tr>
        <tr>
          <th class="tabla__notbold" scope="row">Fecha Entrega</th>
          <td>
            {{ DetalleOrdenes.detalleOrden.fecha_entrega }}
          </td>
        </tr>
        <tr>
          <th class="tabla__notbold" scope="row">Vendedor</th>
          <td>
            {{ DetalleOrdenes.detalleOrden.vendedor }}
          </td>
        </tr>
        <tr>
          <th class="tabla__notbold" scope="row">Estado</th>
          <td>
            {{ DetalleOrdenes.detalleOrden.estado }}
          </td>
        </tr>
        <tr>
          <th class="tabla__notbold" scope="row">Avance Preparación</th>
          <td>
            <b-progress
              :value="DetalleOrdenes.detalleOrden.avance_preparacion * 100"
              :max="max"
              class="mb-3"
            ></b-progress>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TablaGeneral',
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
.tabla__notbold
    font-weight: normal
</style>
