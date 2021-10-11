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
            <li class="breadcrumb-item active" aria-current="page">
              Monitor de Ordenes
            </li>
          </ol>
        </nav>
      </b-col>
    </b-row>
    <b-row no-gutters class="justify-content-center ordenes--bordes">
      <b-col cols="12" class="bg-light px-0 mt-4">
        <h2>Monitor de Ordenes</h2>
        <div class="d-flex justify-content-between mb-3 p-2 rounded border">
          <div class="p-2 bd-highlight">
            <p>Oficina</p>
            <b-form-select
              v-model="oficinaSelec"
              :options="oficinasA"
            ></b-form-select>
          </div>
          <div class="p-2 bd-highlight">
            <p>Estado</p>
            <b-form-select
              v-model="estadoSelec"
              :options="estadosA"
            ></b-form-select>
          </div>
          <div class="p-2 bd-highlight">
            <p>Fecha de Entrega</p>
            <b-form-datepicker
              class="mb-2"
              placeholder="Fecha Inicio"
            ></b-form-datepicker>
          </div>
          <div class="p-2 bd-highlight">
            <p class="p--placeholder">placeholder</p>
            <b-form-datepicker
              class="mb-2"
              placeholder="Fecha Fin"
            ></b-form-datepicker>
          </div>
          <div class="p-2 bd-highlight">
            <p class="p--placeholder">placeholder</p>
            <b-button variant="primary" class="px-4">Buscar</b-button>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row no-gutters class="justify-content-center ordenes--bordes">
      <b-col cols="12" class="bg-light px-0 mb-4"> <TablaOrdenes /> </b-col
    ></b-row>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import TablaOrdenes from '@/components/TablaOrdenes.vue'
import { mapState } from 'vuex'

export default {
  components: {
    NavBar,
    TablaOrdenes,
  },
  data() {
    return {
      estadosA: [{ value: null, text: 'Seleccione...' }],
      estadoSelec: null,
      oficinasA: [{ value: null, text: 'Seleccione...' }],
      oficinaSelec: null,
    }
  },
  created() {
    this.$store.dispatch('Estados/getEstados').then(() => {
      this.mostrarEstados()
    })
    this.$store.dispatch('Oficinas/getOficinas').then(() => {
      this.mostrarOficinas()
    })
  },
  methods: {
    mostrarEstados() {
      for (let estado of this.Estados.estados) {
        this.estadosA.push({ value: estado.id, text: estado.name })
      }
    },
    mostrarOficinas() {
      for (let oficina of this.Oficinas.oficinas) {
        this.oficinasA.push({ value: oficina.id, text: oficina.name })
      }
    },
  },
  computed: {
    ...mapState(['Estados', 'Oficinas']),
  },
}
</script>

<style lang="sass" scoped>
.ordenes--bordes
    padding: 15px
.custom-select
  display: inline-block
  width: 100%
  height: calc(1.5em + .75rem + 2px)
  padding: .375rem 1.75rem .375rem .75rem
  font-size: 1rem
  font-weight: 400
  line-height: 1.5
  color: #495057
  vertical-align: middle
  border: 1px solid #ced4da
  border-radius: .25rem
  -webkit-appearance: none
  -moz-appearance: none
  appearance: none
.p--placeholder
  color: transparent
</style>
