<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid d-flex align-items-md-center">
      <a class="navbar-brand ms-2">
        <img src="@/assets/logo_cetys.png" width="52.5" height="42">
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Features</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Pricing</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link disabled" to="/" tabindex="-1" aria-disabled="true">Disabled</router-link>
          </li>
        </ul>
        <button class="btn btn-outline-warning me-2" type="button">Registrarse</button>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<script>
import { json } from '@/exp.json'

export default {
  data () {
    return {
      cards: json
    }
  }
}
</script>
