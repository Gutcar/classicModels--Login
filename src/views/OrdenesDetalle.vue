<template>
  <div>
    <b-row no-gutters>
      <b-col>
        <NavBar />
      </b-col>
    </b-row>
    <b-row no-gutters class="ordenes--bordes">
      <b-col cols="12" class="bg-light px-0">
        <nav style="--bs-breadcrumb-divider: '>>'" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'home' }">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'ordenes' }"
                >Monitor de Ordenes</router-link
              >
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Detalle Orden
            </li>
          </ol>
        </nav>
      </b-col>
    </b-row>
    <b-row no-gutters class="justify-content-center ordenes--bordes">
      <b-col cols="12" class="bg-light px-0 mb-4">
        <b-tabs content-class="mt-3">
          <b-tab title="General" active>
            <TablaGeneral class="w-50" />
          </b-tab>
          <b-tab title="Datos Cliente">
            <TablaCliente class="w-50" />
          </b-tab>
          <b-tab title="Productos">
            <TablaProductos class="w-75" />
          </b-tab>
        </b-tabs> </b-col
    ></b-row>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import TablaGeneral from '@/components/TablasDetalles/TablaGeneral.vue'
import TablaCliente from '@/components/TablasDetalles/TablaCliente.vue'
import TablaProductos from '@/components/TablasDetalles/TablaProductos.vue'

export default {
  components: {
    NavBar,
    TablaGeneral,
    TablaCliente,
    TablaProductos,
  },
}
</script>

<style lang="sass" scoped>
.ordenes--bordes
    padding: 15px
</style>
