<template>
  <div class="container py-4 py-md-1 my-md-5">
    <div class="row">
      <div class="col">
        <h1 class="fw-light">
          Evaluación de proyectos
        </h1>
        <p class="lead text-muted">
          Este apartado está dedicado a la evaluación de todos los proyectos de la Expo Ingeniería. Todos los proyectos, independientemente de cuál sea su categoría, se encuentran aquí.
          Para calificar un proyecto, es necesario primero seleccionar la categoría a la que pertenece. Una vez hecho esto, podrá seleccionar 1 proyecto entre los que se encuentran en dicha categoría.
          Al tener seleccionado un proyecto, estarán las calificaciones con una barra debajo; la barra podrá deslizarse para seleccionar una calificación, la cual se mostrará siempre encima de la sección.
          Ya teniendo todas las calificaciones, se podrán agregar comentarios adicionales del proyecto; si no se tienen comentarios adicionales, no se requieren mandar.
          Para finalizar, habrá un botón al final de la rúbrica con la leyenda "Enviar", el cual deberá presionarse ya que se tengan todas las calificaciones y comentarios (en caso de haber agregado)
          listos para enviarse. Cuando se despliegue el mensaje de confirmación, habrá finalizado el procedimiento de calificar proyecto.
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
    <form class="row mb-5 mb-md-4 needs-validation" novalidate>
      <div class="col-12 mb-3">
        <div class="btn col-12" role="group" aria-label="Basic outlined example">
          <button @click="activeBoton='btn1'; currCategory='Proyecto académico'" type="button" class="btn btn-outline-primary m-2">Académico</button>
          <button @click="activeBoton='btn2'; currCategory='Producto/proceso-Aplicación industria'" type="button" class="btn btn-outline-primary m-2">Aplicación Industria Categoría 2</button>
          <button @click="activeBoton='btn3'; currCategory='Categoría 1 - Producto/proceso- Asignatura/independiente'" type="button" class="btn btn-outline-primary m-2">Producto y Proceso Categoría 1</button>
          <button @click="activeBoton='btn4'; currCategory='Categoría 2-  Producto/proceso- Asignatura/independiente'" type="button" class="btn btn-outline-primary m-2">Producto y Proceso Categoría 2</button>
          <button @click="activeBoton='btn5'; currCategory='Categoría 1- Software y multmedia-  Aplicación  Industria/asignatura'" type="button" class="btn btn-outline-primary m-2">Software y Multimedia Categoría 1</button>
          <button @click="activeBoton='btn6'; currCategory='Categoría 2- Software y multmedia-  Aplicación Industria/asignatura'" type="button" class="btn btn-outline-primary m-2">Software y Multimedia Categoría 2</button>
        </div>
        <div class="invalid-feedback">
          Por favor, selecciona una categoría.
        </div>
      </div>
      <div class="col-12">
        <p>Porfavor, selecciona un proyecto.</p>
      </div>
      <div class="col-12 mb-5">
        <select v-model="proyecto.proyecto_id" class="form-select" aria-label="selectProyect" required>
          <option selected disabled value="">Elige un proyecto</option>
          <template v-for="card in projectCard.cards" :key="card.proyecto_id">
            <template v-if="card.categoria === currCategory">
              <option :value="card.proyecto_id">
                {{ card.num_proyecto }} - {{ card.nombre_proyecto }}
              </option>
            </template>
          </template>
        </select>
        <div class="invalid-feedback">
          Por favor, elige un proyecto.
        </div>
      </div>
    </form>
  </div>
  <div class="container mt-md-2">
    <template v-if="activeBoton === 'btn1'">
      <RubAcadem/>
    </template>
    <template v-if="activeBoton === 'btn2'">
      <RubIndustria/>
    </template>
    <template v-if="activeBoton === 'btn3'">
      <RubProcProd1/>
    </template>
    <template v-if="activeBoton === 'btn4'">
      <RubProcProd2/>
    </template>
    <template v-if="activeBoton === 'btn5'">
      <RubSWM1/>
    </template>
    <template v-if="activeBoton === 'btn6'">
      <RubSWM2/>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RubAcadem from '../components/RubAcadem.vue'
import RubIndustria from '@/components/RubIndustria.vue'
import RubProcProd1 from '@/components/RubProcProd-1.vue'
import RubProcProd2 from '@/components/RubProcProd-2.vue'
import RubSWM1 from '@/components/RubSWM-1.vue'
import RubSWM2 from '@/components/RubSWM-2.vue'

import { cardStore } from '@/stores/cardStore'
import { evalStore } from '@/stores/evalStore'

const projectCard = cardStore()
const proyecto = evalStore()

const activeBoton = ref('')
const currCategory = ref('')

projectCard.fetchData()
</script>
