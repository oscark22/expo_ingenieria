<template>
  <nav class="navbar navbar-expand-md navbar-light bg-warning sticky-top pb-md-2">
    <div class="container d-flex align-items-md-center">
      <a class="navbar-brand">
        <img src="@/assets/logo_cetysn.png" class="img-fluid" width="50" alt="logo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav flex-wrap pt-2 py-md-0">
          <li class="nav-item col-6 col-md-auto">
            <router-link class="nav-link" aria-current="page" to="/">
              Inicio
            </router-link>
          </li>
          <li class="nav-item col-6 col-md-auto">
            <router-link class="nav-link active" to="/projects">
              Proyectos
            </router-link>
          </li>
          <template v-if="user.type === 'e'">
            <li class="nav-item col-6 col-md-auto">
              <router-link class="nav-link active" to="/users">
                Datos de mi proyecto <i class="bi bi-journals"></i>
              </router-link>
            </li>
          </template>
          <template v-else-if="user.type === 'j'">
            <li class="nav-item col-6 col-md-auto">
              <router-link class="nav-link active" to="/judges" tabindex="-1" aria-disabled="true">
                Calificar proyectos <i class="bi bi-clipboard-data"></i>
              </router-link>
            </li>
          </template>
        </ul>
        <hr>
        <ul class="navbar-nav flex-row flex-wrap ms-md-auto">
          <template v-if="!user.logged_in">
            <button class="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              Iniciar Sesión
            </button>
          </template>
          <template v-else>
            <button @click="user.logout(); user.logged_in=false; user.type=''" class="btn btn-dark" type="button">
              Cerrar Sesión
            </button>
          </template>
        </ul>
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
        Ingresa los datos para iniciar sesión.
      </p>
      <form>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text"><i class="bi bi-person-fill"></i></div>
          </div>
          <input v-model="user.email" type="text" class="form-control" placeholder="Usuario" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3" id="botonInicioSesion">
          <div class="input-group-prepend">
            <div class="input-group-text"><i class="bi bi-key-fill"></i></div>
          </div>
          <input v-model="user.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">
        </div>
        <button @click="user.LoginAuth()" type="button" class="btn btn-warning" id="botoniniciosesion">Iniciar Sesión</button>
      </form>
    </div>
  </div>
  <router-view/>
  <footer class="footer mt-5 mb-2">
    <div class="container">
      <div class="row flex-row text-center p-4 p-md-0">
        <div class="col col-6 col-md-3">
          <img src="@/assets/logo_expo_anio.png" class="img-fluid" width="200" alt="logo_ceid">
        </div>
        <div class="col col-6 col-md-3">
          <img src="@/assets/logo_tyva.png" class="img-fluid" width="200" alt="logo_expo">
        </div>
        <div class="col col-6 col-md-3">
          <img src="@/assets/logo_ceid.png" class="img-fluid" width="200" alt="logo_tyva">
        </div>
        <div class="col col-6 col-md-3">
          <img src="@/assets/LOGO_CIAP_1.png" class="img-fluid" width="90" alt="logo_ciap">
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { userStore } from '@/stores/userStore'

const user = userStore()

user.initComponents()
</script>
