<template>
  <div class="container-fluid text-white text-center p-3 mt-0 mt-md-5" id="Proy">
    <div class="row mb-3">
      <div class="col col-md-6 mx-auto">
        <h1 class="display-5 fw-light fw-bold">
          Proyectos
        </h1>
        <p class="lead">
          Los proyectos se encuentran organizados según su clasificación. Elige una de las categorías de proyecto disponibles.
        </p>
      </div>
    </div>
    <div class="row btn-group" role="group" aria-label="Basic outlined example">
      <button @click="projectCard.fetchData(); activeBtn='btn1'; currCategory='Proyecto académico'" type="button" class="btn col-6 col-md-3">
        <img src="../assets/iconos-08.png" width="45" height="50">
        <p class="text-white">
          Académico
        </p>
      </button>
      <button @click="activeBtn='btn2'" type="button" class="btn col-6 col-md-3">
        <img src="../assets/iconos-07.png" width="45" height="50">
        <p class="text-white">
          Producto y Proceso
        </p>
      </button>
      <button @click="activeBtn='btn4'" type="button" class="btn col-6 col-md-3">
        <img src="../assets/iconos-06.png" width="45" height="50">
        <p class="text-white">
          Software y Multimedia
        </p>
      </button>
      <button @click="projectCard.fetchData(); activeBtn='btn3'; currCategory='Producto/proceso-Aplicación industria'" type="button" class="btn col-6 col-md-3">
        <img src="../assets/iconos-05.png" width="45" height="50">
        <p class="text-white">
          Aplicación Industria
        </p>
      </button>
    </div>
  </div>
  <div class="container text-center mb-md-5 mb-5 pb-md-4 pb-3 mt-2">
    <template v-if="activeBtn === 'btn2'">
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button @click="projectCard.fetchData(); currCategory='Categoría 1 - Producto/proceso- Asignatura/independiente'" type="button" class="btn btn-outline-dark">
          Categoría I
        </button>
        <button @click="projectCard.fetchData(); currCategory='Categoría 2-  Producto/proceso- Asignatura/independiente'" type="button" class="btn btn-outline-dark">
          Categoría II
        </button>
      </div>
    </template>
    <template v-else-if="activeBtn === 'btn4'">
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button @click="projectCard.fetchData(); currCategory='Categoría 1- Software y multmedia-  Aplicación  Industria/asignatura'" type="button" class="btn btn-outline-dark">
          Categoría I
        </button>
        <button @click="projectCard.fetchData(); currCategory='Categoría 2- Software y multmedia-  Aplicación Industria/asignatura'" type="button" class="btn btn-outline-dark">
          Categoría II
        </button>
      </div>
    </template>
  </div>
  <div class="container mb-4">
    <div class="row row-cols-md-4 gy-4">
      <template v-for="card in projectCard.cards" :key="card.proyecto_id">
        <template v-if="card.categoria === currCategory" class="col">
          <CardComp
            :curr_category="currCategory"
            :nombre_equipo="card.nombre_equipo"
            :card_id="card.num_proyecto"
            :nombre_proyecto="card.nombre_proyecto"
            :descripcion="card.descripcion"
            :url_sala="card.url_sala"
            :url_video="card.url_video"
          />
        </template>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { cardStore } from '@/stores/cardStore'
import CardComp from '@/components/CardComp.vue'

const projectCard = cardStore()

const activeBtn = ref('')
const currCategory = ref('0')

// fetch card data
projectCard.fetchData()
</script>

<style scoped>
  #Proy {
    background: #6798C0;
  }
</style>
