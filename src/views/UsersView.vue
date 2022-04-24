<template>
    <div class="container py-4 my-5">
    <div class="row">
      <div class="col">
        <h1 class="fw-light">
          Datos de Proyecto
        </h1>
        <p class="lead text-muted">
          Este apartado está dedicado a la agregación de los links de la sala Meet de Google donde se presentará el proyecto, así como un enlace al video de dicho proyecto.
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <form class="row g-4 mb-5 needs-validation" novalidate>
      <div class="col-md-12">
        <label for="youtubeControl" class="form-label">Link de la sesión de Google Meet</label>
        <input type="text" class="form-control" id="youtubeControl" placeholder="Link de Meet." required>
        <div class="invalid-feedback">
          Asegúrate de insertar un link de Google Meet.
        </div>
      </div>
      <div class="col-md-12">
        <label for="meetControl" class="form-label">Link del video de Youtube</label>
        <input type="text" class="form-control" id="meetControl" placeholder="Link de Youtube." required>
        <div class="invalid-feedback">
          Asegúrate de insertar un link de Youtube.
        </div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">
          Confirmar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
