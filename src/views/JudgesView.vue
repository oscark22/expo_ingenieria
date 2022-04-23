<template>
  <div class="container py-4 my-5">
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
          Para evaluar un proyecto, selecciona la categoría a la que pertenece; sólo aquellos que pertenezcan a esa categoría podrán ser elegidos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet expedita accusamus magnam? Expedita ea error sint dolores reiciendis ad, velit necessitatibus, suscipit fugit sapiente nulla! Commodi minus nihil dolores aspernatur? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni praesentium modi distinctio iusto eaque quis obcaecati pariatur ab vero incidunt illum, aliquam quaerat a ipsa reprehenderit est ipsam, soluta totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolor fuga velit facere omnis, accusantium quae perspiciatis reiciendis quasi illo molestiae assumenda quidem at iusto repellendus! Sequi porro aliquid dolor?
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <form class="row g-4 mb-5 needs-validation" novalidate>
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
      <div class="col-md-12">
        <label for="gradeRange" class="form-label">Calificación otorgada: {{ currGrade }}</label>
        <input v-model="currGrade" type="range" class="form-range" min="1" max="5" step="1" id="gradeRange">
      </div>
      <div class="col-md-12">
        <textarea class="form-control" id="projectComments" placeholder="Escribe aquí tus comentarios (opcional)." rows="4" required></textarea>
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
  data () {
    return {
      currGrade: 3
    }
  }
}
</script>

<style>

</style>
