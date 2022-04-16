<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid d-flex align-items-md-center">
      <a class="navbar-brand ms-2">
        <img src="@/assets/logo_cetys.png" width="52.5" height="42">
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
    <div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header" id="iniciarsesionTop">
        <h5 id="offcanvasRightLabel" class="text-white">Iniciar Sesión</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body" id="iniciarsesion">
        <form>
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text"><i class="bi  bi-person-fill"></i></div>
            </div>
            <input type="text" class="form-control" placeholder="Usuario" aria-label="Username" aria-describedby="basic-addon1">
          </div>
          <div class="input-group" id="botonInicioSesion">
            <div class="input-group-prepend">
              <div class="input-group-text"><i class="bi bi-key-fill"></i></div>
            </div>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">
          </div>
          <button type="submit" class="btn btn-warning" id="botoniniciosesion">Iniciar Sesión</button>
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
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.btn{
  margin-top: 3vh;
}
#botonInicioSesion{
   margin-top: 3vh;
}
#iniciarsesion{
    margin-top: 5%;
}
#iniciarsesionTop{
  margin-top: 5%;
}
.form-control:focus {
  border-color: rgb(255, 226, 38);
  box-shadow: 0 0 0 0.2rem rgba(255, 226, 38, 0.5);
}
</style>
