<template>
  <div class="container py-4 py-md-4 my-md-2">
    <div class="row">
      <div class="col">
        <h1 class="fw-light">
          Datos de Proyecto
        </h1>
        <p class="lead text-muted">
          Este apartado está dedicado a la agregación de los links del proyecto como lo son: link del vídeo del proyecto y link de la sala virtual.
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <form @submit.prevent class="row g-4 needs-validation">
      <div class="col-md-12">
        <label for="zoomControl" class="form-label">Link de la sala de Zoom</label>
        <input v-model="project.url_sala" type="text" class="form-control" id="zoomControl" placeholder="Link de Zoom." required>
      </div>
      <div class="col-md-12">
        <label for="youtubeControl" class="form-label">Link del video de Youtube</label>
        <input v-model="project.url_video" type="text" class="form-control" id="youtubeControl" placeholder="Link de Youtube." required>
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
