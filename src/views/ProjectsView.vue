<template>
  <div class="container text-center pt-5 mt-5">
    <div class="row mb-3">
      <div class="col col-md-6 mx-auto">
        <h1 class="display-5 fw-light">
          Proyectos
        </h1>
        <p class="lead text-muted">
          Los proyectos se encuentran organizados según su clasificación. Elige de las categorías de proyecto disponibles.
        </p>
      </div>
    </div>
    <div class="btn-group" role="group" aria-label="Basic outlined example">
      <button @click="fetchData(urls[0]); activeBtn='btn1';" type="button" class="btn btn-primary">
        <i class="bi bi-journal-bookmark-fill"></i>
        Académico
      </button>
      <button @click="fetchData(urls[0]); activeBtn='btn2';" type="button" class="btn btn-secondary">
        <i class="bi bi-cpu"></i>
        Software y multimedia
      </button>
      <button @click="fetchData(urls[0]); activeBtn='btn3';" type="button" class="btn btn-success">
        <i class="bi bi-box-seam"></i>
        Producto
      </button>
      <button @click="fetchData(urls[0]); activeBtn='btn4';" type="button" class="btn btn-danger">
        <i class="bi bi-gear-wide-connected"></i>
        Proceso
      </button>
    </div>
  </div>
  <div class="container text-center pb-5 mb-5 mt-2">
    <template v-if="activeBtn==='btn2'">
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button @click="fetchData(urls[0])" type="button" class="btn btn-warning">
          Categoría I
        </button>
        <button @click="fetchData(urls[0])" type="button" class="btn btn-dark">
          Categoría II
        </button>
      </div>
    </template>
    <template v-else-if="activeBtn==='btn4'">
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button @click="fetchData(urls[0])" type="button" class="btn btn-warning">
          Categoría I
        </button>
        <button @click="fetchData(urls[0])" type="button" class="btn btn-dark">
          Categoría II
        </button>
      </div>
    </template>
  </div>
  <div class="container">
    <div class="row row-cols-md-4 gy-4">
      <template v-for="card in cards" :key="card.proyecto_id">
        <div class="col">
          <CardComp
            :card_id="card.proyecto_id"
            :img_src="card.img_src"
            :nombre_proyecto="card.nombre_proyecto"
            :descripcion="card.descripcion"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CardComp from '@/components/CardComp.vue'

export default {
  data () {
    return {
      cards: [],
      errorMsg: '',
      urls: [
        'https://expoingenieria.com/rest_api_expo/tablas/proyecto/'
      ],
      activeBtn: ''
    }
  },
  components: {
    CardComp
  },
  methods: {
    async fetchData (url) {
      try {
        const response = await axios.get(url)
        this.cards = response.data
      } catch (error) {
        console.error(error)
      }
    }
  },
  created () {
    this.fetchData(this.urls[0])
  }
}
</script>
