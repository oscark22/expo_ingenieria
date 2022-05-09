<template>
  <div class="container py-4 py-md-4 my-md-5">
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
        <label for="nombreTeam" class="form-label">Nombre del equipo</label>
        <input v-model="project.team_name" type="text" class="form-control" id="nombreTeam" placeholder="Nombre de equipo." required>
        <div class="invalid-feedback">
          Asegúrate de insertar el nombre del equipo.
        </div>
      </div>
      <div class="col-md-12">
        <label for="nombreProject" class="form-label">Nombre del proyecto</label>
        <input v-model="project.project_name" type="text" class="form-control" id="nombreTeam" placeholder="Nombre del proyecto." required>
        <div class="invalid-feedback">
          Asegúrate de insertar el nombre del proyecto.
        </div>
      </div>
      <div class="col-md-12">
        <label for="descriptionProject" class="form-label">Descripción del proyecto</label>
        <input v-model="project.desc_project" type="text" class="form-control" id="descriptionProject" placeholder="Descripción." required>
        <div class="invalid-feedback">
          Asegúrate de insertar una breve descripción.
        </div>
      </div>
      <div class="col-md-12">
        <label for="youtubeControl" class="form-label">Link de la sesión de Google Meet</label>
        <input v-model="project.url_sala" type="text" class="form-control" id="youtubeControl" placeholder="Link de Meet." required>
        <div class="invalid-feedback">
          Asegúrate de insertar un link de Google Meet.
        </div>
      </div>
      <div class="col-md-12">
        <label for="meetControl" class="form-label">Link del video de Youtube</label>
        <input v-model="project.url_video" type="text" class="form-control" id="meetControl" placeholder="Link de Youtube." required>
        <div class="invalid-feedback">
          Asegúrate de insertar un link de Youtube.
        </div>
      </div>
      <div class="col-12">
        <button @click="project.ProjectInfo" class="btn btn-warning" type="submit">
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
