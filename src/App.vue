<template>
<body>
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-warning sticky-top">
    <div class="container d-flex align-items-md-center">
      <a class="navbar-brand ms-2">
        <img src="@/assets/logo_cetysn.png" class="img-fluid" width="50" alt="logo">
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
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
          <li>
            <button class="btn btn-dark ms-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              Iniciar Sesión
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->
  <nav class="navbar navbar-expand-lg navbar-light bg-warning sticky-top">
    <div class="container d-flex align-items-md-center">
      <a class="navbar-brand">
        <img src="@/assets/logo_cetysn.png" class="img-fluid" width="50" alt="logo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav flex-row flex-wrap py-2 mx-2 mb-lg-0">
          <li class="nav-item col-6 col-md-auto">
            <router-link class="nav-link" aria-current="page" to="/">Inicio</router-link>
          </li>
          <li class="nav-item col-6 col-md-auto">
            <router-link class="nav-link active" to="/projects">Proyectos</router-link>
          </li>
          <li class="nav-item col-6 col-md-auto">
            <router-link class="nav-link active" to="/users">Users</router-link>
          </li>
          <li class="nav-item col-6 col-md-auto">
            <router-link class="nav-link active" to="/judges" tabindex="-1" aria-disabled="true">Judges</router-link>
          </li>
        </ul>
        <ul class="navbar-nav " id="mainNav">
        </ul>
        <button class="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          Iniciar Sesión
        </button>
      </div>
    </div>
  </nav>
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
  <router-view/>
</body>
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
  /* body{
    font-family:Arial, Helvetica, sans-serif;
  } */
</style>
