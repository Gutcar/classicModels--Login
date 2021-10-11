<template>
  <div>
    <b-row no-gutters>
      <b-col>
        <NavBar />
      </b-col>
    </b-row>
    <b-row no-gutters class="home--bordes">
      <b-col cols="12" class="bg-light px-0">
        <nav style="--bs-breadcrumb-divider: '>>'" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">Home</li>
          </ol>
        </nav>
        <div class="text-center my-3">
          <img
            alt="Vitrina"
            src="../assets/img/Vitrina.png"
            class="img-fluid"
          />
        </div>
      </b-col>
    </b-row>
    <b-row no-gutters class="home--bordes">
      <b-col cols="12" class="bg-light px-0">
        <h2 class="display-5">Bienvenido</h2>
        <p>Bienvenido al sistema de Ordenes e Inventario de ClassicModes</p>
        <b-row>
          <b-col>
            <b-row align-v="center">
              <b-col cols="5">
                <div class="home--porcentaje">
                  {{
                    (parseInt(Dashboard.kpis[0].entregadas) * 100) /
                    (parseInt(Dashboard.kpis[0].entregadas) +
                      parseInt(Dashboard.kpis[0].pendientes))
                  }}%
                  <p class="home--pequeno">
                    <router-link :to="{ name: 'ordenes-detalle' }"
                      >Ver Detalles</router-link
                    >
                  </p>
                </div>
              </b-col>
              <b-col>
                <h5>{{ Dashboard.kpis[0].nombre }}</h5>
                <b-row>
                  <b-col cols="6">
                    <p class="home--grande">
                      {{ Dashboard.kpis[0].entregadas }}
                    </p>
                    <p>Ordenes Entregadas</p>
                  </b-col>
                  <b-col cols="6">
                    <p class="home--grande">
                      {{ Dashboard.kpis[0].pendientes }}
                    </p>
                    <p>Ordenes Pendientes</p>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
          <b-col>
            <b-row align-v="center">
              <b-col cols="5">
                <div class="home--porcentaje">
                  {{
                    (parseInt(Dashboard.kpis[1].atrasadas) * 100) /
                    parseInt(Dashboard.kpis[1].totales)
                  }}%
                  <p class="home--pequeno">
                    <router-link :to="{ name: 'ordenes-detalle' }"
                      >Ver Detalles</router-link
                    >
                  </p>
                </div>
              </b-col>
              <b-col>
                <h5>{{ Dashboard.kpis[1].nombre }}</h5>
                <b-row>
                  <b-col cols="6">
                    <p class="home--grande">
                      {{ Dashboard.kpis[1].totales }}
                    </p>
                    <p>Ordenes Totales</p>
                  </b-col>
                  <b-col cols="6">
                    <p class="home--grande">
                      {{ Dashboard.kpis[1].atrasadas }}
                    </p>
                    <p>Ordenes Atrasadas</p>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row no-gutters class="home--bordes">
      <b-col cols="12" class="bg-light px-0">
        <b-row>
          <b-col>
            <h2>Últimas Ordenes</h2>
            <Tabla
              :tipoFecha="'Entrega'"
              :estadoEx="'Estado'"
              :ordenes="Dashboard.ultimasOrdenes"
            />
          </b-col>
          <b-col>
            <h2>Últimas Devoluciones</h2>
            <Tabla
              :tipoFecha="'Devolución'"
              :estadoEx="''"
              :ordenes="Dashboard.ultimasDevoluciones"
            />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Tabla from '@/components/TablaHome.vue'
import { mapState } from 'vuex'

export default {
  components: {
    NavBar,
    Tabla,
  },
  created() {
    this.$store.dispatch('Dashboard/getDashboard')
  },
  computed: {
    ...mapState(['Dashboard']),
  },
}
</script>

<style lang="sass" scoped>
.home--bordes
    padding: 15px
.home--grande
    font-size: 1.8rem
.home--porcentaje
    font-size: 3rem
    padding: 0 25%
.home--pequeno
    font-size: 1rem
</style>
