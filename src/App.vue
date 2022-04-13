<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid d-flex align-items-md-center">
      <a class="navbar-brand ms-2">
        <img src="./assets/logo_cetys.png" width="52.5" height="42">
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <button class="btn btn-outline-warning me-2" type="button">Registrarse</button>
      </div>
    </div>
  </nav>
  <router-view/>
</template>
