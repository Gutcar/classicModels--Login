<template>
  <div class="table-responsive tabla--borde">
    <table class="table table-borderless">
      <tbody>
        <tr>
          <th class="tabla__notbold" scope="row">Nombre</th>
          <td>
            {{ DetalleOrdenes.detalleCliente.nombre }}
          </td>
        </tr>
        <tr>
          <th class="tabla__notbold" scope="row">RUT</th>
          <td>
            {{ DetalleOrdenes.detalleCliente.rut_n + '-' +  DetalleOrdenes.detalleCliente.rut_dv}}
          </td>
        </tr>
        <tr>
          <th class="tabla__notbold" scope="row">Dirección Entrega</th>
          <td>
            {{ DetalleOrdenes.detalleCliente.direccion_entrega }}
          </td>
        </tr>
        <tr>
          <th class="tabla__notbold" scope="row">Contacto</th>
          <td>
            {{ DetalleOrdenes.detalleCliente.contacto }}
          </td>
        </tr>
        <tr>
          <th class="tabla__notbold" scope="row">Fono</th>
          <td>
            {{ DetalleOrdenes.detalleCliente.fono }}
          </td>
        </tr>
        <tr>
          <th class="tabla__notbold" scope="row">Email</th>
          <td>
            {{ DetalleOrdenes.detalleCliente.email }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TablaCliente',
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
