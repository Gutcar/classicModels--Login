<template>
  <div class="table-responsive tabla--borde">
    <table class="table table-borderless">
      <tbody>
        <tr v-for="(orden, index) in DetalleOrdenes.detalleOrden" :key="index">
          <th class="tabla__notbold" scope="row">
            <span v-if="index === 'num_orden'">N° Orden</span>
            <span v-else-if="index === 'monto'">Monto Orden</span>
            <span v-else-if="index === 'cant_productos'">Cant Productos</span>
            <span v-else-if="index === 'fecha_entrega'">Fecha Entrega</span>
            <span v-else-if="index === 'vendedor'">Vendedor</span>
            <span v-else-if="index === 'estado'">Estado</span>
            <span v-else-if="index === 'avance_preparacion'"
              >Avance Preparación</span
            >
          </th>
          <td>
            <span v-if="index !== 'avance_preparacion'">{{ orden }}</span>
            <span v-else
              ><b-progress
                :value="orden * 100"
                :max="max"
                class="mb-3"
              ></b-progress
            ></span>
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
