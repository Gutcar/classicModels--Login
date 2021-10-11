<template>
  <b-row no-gutters class="justify-content-center">
    <b-col cols="12" class="text-center text-md-start">
      <router-link :to="{ name: 'home' }"
        ><img
          alt="Logo"
          src="../assets/img/logo.jpg"
          class="img-fluid logo mt-5 mx-md-5"
      /></router-link>
    </b-col>
    <b-col cols="12" md="auto" class="login m-4">
      <b-form @submit.prevent="" class="p-5 rounded border">
        <h2 class="mb-5">Login Usuarios</h2>
        <b-form-group label="Email" class="size text-start">
          <b-form-input type="email" required> </b-form-input>
        </b-form-group>
        <b-form-group label="Contraseña" class="size text-start">
          <b-form-input type="password" required> </b-form-input>
        </b-form-group>
        <p style="color: red"></p>
        <b-button type="submit" variant="primary" class="w-100 mt-5"
          >Ingresar</b-button
        >
      </b-form>
    </b-col>
  </b-row>
</template>

<style lang="scss" scoped>
.logo {
  width: 100px;
}
.login {
  width: 400px;
  text-align: center;
}
.size {
  font-size: 1.1em;
}
input {
  margin-bottom: 15px !important;
}
</style>
