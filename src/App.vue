<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container d-flex align-items-md-center">
        <a class="navbar-brand ms-2">
          <img src="@/assets/logo_cetys.png" class="img-fluid" width="52.5" height="42" alt="logo">
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/projects">Proyectos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/users">Users</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/judges" tabindex="-1" aria-disabled="true">Judges</router-link>
            </li>
          </ul>
          <button class="btn btn-warning me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Iniciar Sesión</button>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header bg-dark" id="iniciarsesionTop">
        <h4 class="text-white fw-light" id="offcanvasRightLabel">Iniciar Sesión 😎</h4>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body" id="iniciarsesion">
        <p class="lead text-muted">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <form>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text"><i class="bi bi-person-fill"></i></div>
            </div>
            <input type="text" class="form-control" placeholder="Usuario" aria-label="Username" aria-describedby="basic-addon1">
          </div>
          <div class="input-group mb-3" id="botonInicioSesion">
            <div class="input-group-prepend">
              <div class="input-group-text"><i class="bi bi-key-fill"></i></div>
            </div>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">
          </div>
          <button type="submit" class="btn btn-warning" id="botoniniciosesion">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  </main>
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

<style>

</style>
