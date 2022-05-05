<template>
  <div class="container py-4 py-md-4 my-md-1">
    <div class="row">
      <div class="col">
        <h1 class="fw-light">
          Evaluación de proyectos
        </h1>
        <p class="lead text-muted">
          Este apartado está dedicado a la evaluación de todos los proyectos de la Expo Ingeniería. Todos los proyectos, independientemente de cuál sea su categoría, se encuentran aquí.
        </p>
        <br>
        <p class="lead">
          Para evaluar un proyecto, selecciona la categoría a la que pertenece; sólo aquellos que pertenezcan a esa categoría podrán ser elegidos.
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <form class="row g-4 mb-5 mb-md-4 needs-validation" novalidate>
      <div class="col-md-6">
        <select class="form-select" aria-label="selectCategory" required>
          <option selected disabled value="">Selecciona una categoría</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div class="invalid-feedback">
          Porfavor selecciona una categoría.
        </div>
      </div>
      <div class="col-md-6">
        <select class="form-select" aria-label="selectProyect" required>
          <option selected disabled value="">Elige un proyecto</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div class="invalid-feedback">
          Porfavor elige un proyecto.
        </div>
      </div>
    </form>
  </div>
  <div class="container">
    <RubAcadem/>
  </div>
</template>

<script>
import RubAcadem from '@/components/RubAcadem.vue'

export default {
  data () {
    return {
      currGrade: 3
    }
  },
  components: {
    RubAcadem
  }
}
</script>

<style>

</style>
