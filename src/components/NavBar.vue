<template>
  <nav>
    <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
      <b-navbar-toggle target="nav-collapse" class="mx-3"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="justify-content-between">
        <b-navbar-nav class="mr-md-3 mx-3">
          <b-nav-item>Company</b-nav-item>
          <b-nav-item :to="{ name: 'home' }">Home</b-nav-item>
          <b-nav-item :to="{ name: 'ordenes' }">Ordenes</b-nav-item>
          <b-nav-item>Inventario</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto mx-3">
          <b-nav-item disabled>Profile</b-nav-item>
          <b-nav-item @click.prevent="">Log Out</b-nav-item>
          <!--
          <b-nav-form>
            <b-button class="btn btn-dark" variant="dark" type="button" @click.prevent=""
              >Log Out</b-button
            >
          </b-nav-form>
          -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style lang="scss" scoped>
nav {
  padding: 0 !important;
}
</style>
