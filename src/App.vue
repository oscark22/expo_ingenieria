<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid d-flex align-items-md-center">
      <a class="navbar-brand ms-2">
        <img src="@/assets/logo_cetys.png" width="52.5" height="42" alt="logo">
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/projects">Proyectos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Pricing</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link disabled" to="/" tabindex="-1" aria-disabled="true">Disabled</router-link>
          </li>
        </ul>
        <button class="btn btn-outline-warning me-2" type="button">Acceder</button>
        <button class="btn btn-outline-warning me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Iniciar Sesión</button>
      </div>
    </div>
  </nav>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Iniciar Sesión</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <form>
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Usuario" aria-label="Username" aria-describedby="basic-addon1">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">
          </div>
          <button type="submit" class="btn btn-primary btn btn-dark">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  <br>
  <router-view/>
</template>

<script>
export default {
  data () {
    return {
      isvisible: false
    }
  },
  methods: {
    iniciarsesion () {
      this.isvisible = !this.isvisible
    }
  }
}
</script>
<style scoped>
.formIniciarsesion{
  position:relative;
  margin: .5%;
  float:right;
  background-color: #FFC107;
  padding:2vh;
  display: flex;
  border-radius: 10px;
  font: bold;
}
.btn{
  margin-top: 1vh;
}
#labelIniciar {
  text-align: center;
  font: bold;
}
.form-group{
   margin-top: 1vh;
}
</style>
