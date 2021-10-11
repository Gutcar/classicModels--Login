<template>
  <div class="table-responsive tabla--borde">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">N°Orden</th>
          <th scope="col">Cliente</th>
          <th scope="col">Fecha {{ tipoFecha }}</th>
          <th v-if="estadoEx !== ''" scope="col">{{ estadoEx }}</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(orden, index) in ordenes" :key="index">
          <td>{{ orden.num_orden }}</td>
          <td>{{ orden.cliente }}</td>
          <td>{{ orden.fecha_entrega }}</td>
          <td>{{ orden.estado }}</td>
          <td>
            <span class="btn-outline-primary"
              ><router-link :to="{ name: 'ordenes-detalle' }"
                >Ver Detalles</router-link
              ></span
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Tabla',
  props: {
    tipoFecha: String,
    estadoEx: String,
    ordenes: Array,
  },
}
</script>

<style lang="sass" scoped>
.tabla--borde
    padding: 20px
</style>
