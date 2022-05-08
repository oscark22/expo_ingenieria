<template>
  <div class="container py-4 py-md-4 my-md-5">
    <div class="row">
      <div class="col">
        <h1 class="fw-light">
          Evaluación de proyectos
        </h1>
        <p class="lead text-muted">
          Este apartado está dedicado a la evaluación de todos los proyectos de la Expo Ingeniería. Todos los proyectos, independientemente de cuál sea su categoría, se encuentran aquí.
        </p>
        <p class="lead text-muted">
          <strong>
          Las calificaciones se dividen en 5 estados: <br>
          </strong>
          1. 0  No aplica <br>
          2. 1-25 Insuficiente <br>
          3. 26-50 Suficiente <br>
          4. 51-75 Mejorable <br>
          5. 76-100 Sobresaliente
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
          <option :currCategory="1" value="1">Académico</option>
          <option :currCategory="2" value="2">Software y Multimedia categoría 1</option>
          <option :currCategory="3" value="3">Software y Multimedia categoría 2</option>
          <option :currCategory="4" value="4">Proceso de producción categoría 1</option>
          <option :currCategory="5" value="5">Proceso de producción categoría 2</option>
          <option :currCategory="6" value="6">Industria</option>
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
    <template v-if="currCategory === '1'">
      <RubAcadem/>
    </template>
        <template v-if="currCategory === '2'">
      <RubSWM1/>
    </template>
    <template v-if="currCategory === '3'">
      <RubSWM2/>
    </template>
    <template v-if="currCategory === '4'">
      <RubProcProd1/>
    </template>
    <template v-if="currCategory === '5'">
      <RubProcProd2/>
    </template>
    <template v-if="currCategory === '6'">
      <RubIndustria/>
    </template>
  <div class="container col-12 mt-3">
  <button @click="project.ProjectInfo" class="btn btn-warning" type="button">
    Confirmar
  </button>
</div>
</template>

<script setup>
import RubAcadem from '@/components/RubAcadem'
import RubIndustria from '@/components/RubIndustria.vue'
import RubProcProd1 from '@/components/RubProcProd-1.vue'
import RubProcProd2 from '@/components/RubProcProd-2.vue'
import RubSWM1 from '@/components/RubSWM-1.vue'
import RubSWM2 from '@/components/RubSWM-2.vue'
</script>
