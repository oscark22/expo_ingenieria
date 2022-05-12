<template>
  <div class="container py-4 py-md-4 my-md-2">
    <div class="row">
      <div class="col">
        <h1 class="fw-light">
          Datos de Proyecto
        </h1>
        <p class="lead text-muted">
          Este apartado está dedicado a la agregación de los links del proyecto como lo son: link del vídeo del proyecto y link de la sala virtual. Para agregar el link de la sala virtual,
          es necesario que lo generen a través de una cuenta institucional con terminación @cetys.edu.mx para así obtener un link adecuado.
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <form class="row g-4 needs-validation">
      <div class="col-md-12">
        <label for="meet" class="form-label">Link de la sala de Meet</label>
        <input v-model="project.url_sala" type="text" class="form-control" id="meetControl" placeholder="Link de Meet." required>
      </div>
      <div class="col-md-12">
        <label for="youtubeControl" class="form-label">Link del video de Youtube</label>
        <input v-model="project.url_video" type="text" class="form-control" id="youtubeControl" placeholder="Link de Youtube." required>
      </div>
      <div class="col-12">
        <button @click="project.AddLinks()" class="btn btn-warning" type="button" data-bs-toggle="modal" data-bs-target="#projectModal">
          Confirmar
        </button>
      </div>
    </form>
    <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="projectModalLabel">Acerca de los links del proyecto</h5>
          </div>
          <div class="modal-body">
            <template v-if="project.modalState">
              <p>
                La información correspondiente a los links de Youtube y Meet ha sido guardada exitosamente. Estos son los links que has ingresado:
              </p>
              <p>Meet: {{ project.url_sala }}</p>
              <p>Youtube: {{ project.url_video }}</p>
              <p>
                En el caso que los links que hayas ingresado sean incorrectos o desees actualizar los links por otros nuevos, puedes volver a este apartado en cualquier momento y cambiar la ruta tanto de Youtube como de Meet de tu proyecto asociado.
              </p>
            </template>
            <template v-else>
              <p>
                La información asociada a tus links no se pudo guardar exitosamente. Vuelve a intentarlo. Si eso no funciona, prueba con salir de la sesión y entrar nuevamente.
              </p>
            </template>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { projectStore } from '@/stores/projectStore'

const project = projectStore()
</script>
