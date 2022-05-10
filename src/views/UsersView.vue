<template>
  <div class="container py-4 py-md-4 my-md-2">
    <div class="row">
      <div class="col">
        <h1 class="fw-light">
          Datos de Proyecto
        </h1>
        <p class="lead text-muted">
          Este apartado está dedicado a la agregación de la información del proyecto, datos como son: nombre del equipo, nombre del proyecto, una breve descripción de este,
          link del vídeo del proyecto y link de la sala de Google Meet.
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <form @submit.prevent="pData" class="row g-4 mb-5 needs-validation">
      <div class="col-md-12">
        <label for="zoomControl" class="form-label">Link de la sala de Zoom</label>
        <input v-model="project.url_sala" type="text" class="form-control" id="zoomControl" placeholder="Link de Zoom." required>
        <div class="invalid-feedback">
          Asegúrate de insertar un link de Zoom.
        </div>
      </div>
      <div class="col-md-12">
        <label for="youtubeControl" class="form-label">Link del video de Youtube</label>
        <input v-model="project.url_video" type="text" class="form-control" id="youtubeControl" placeholder="Link de Youtube." required>
        <div class="invalid-feedback">
          Asegúrate de insertar un link de Youtube.
        </div>
      </div>
      <div class="col-12">
        <button @click="project.AddLinks()" class="btn btn-warning" type="submit">
          Confirmar
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { projectStore } from '@/stores/projectStore'

const project = projectStore()
</script>

<script>
(function () {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
</script>
