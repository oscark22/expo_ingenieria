<template>
  <div class="container text-center pt-5 pt-md-4 mt-md-5">
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
      <button @click="fetchData(); activeBtn='btn1'; currCategory='0'" type="button" class="btn btn-primary">
        <i class="bi bi-journal-bookmark-fill"></i>
        Académico
      </button>
      <button @click="activeBtn='btn2'" type="button" class="btn btn-secondary">
        <i class="bi bi-cpu"></i>
        Software y multimedia
      </button>
      <button @click="fetchData(); activeBtn='btn3'; currCategory='3'" type="button" class="btn btn-success">
        <i class="bi bi-box-seam"></i>
        Producto
      </button>
      <button @click="activeBtn='btn4'" type="button" class="btn btn-danger">
        <i class="bi bi-gear-wide-connected"></i>
        Proceso
      </button>
    </div>
  </div>
  <div class="container text-center mb-md-5 mb-5 pb-md-4 pb-3 mt-2">
    <template v-if="activeBtn === 'btn2'">
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button @click="fetchData(); currCategory='1'" type="button" class="btn btn-warning">
          Categoría I
        </button>
        <button @click="fetchData(); currCategory='2'" type="button" class="btn btn-dark">
          Categoría II
        </button>
      </div>
    </template>
    <template v-else-if="activeBtn === 'btn4'">
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button @click="fetchData(); currCategory='4'" type="button" class="btn btn-warning">
          Categoría I
        </button>
        <button @click="fetchData(); currCategory='5'" type="button" class="btn btn-dark">
          Categoría II
        </button>
      </div>
    </template>
  </div>
  <div class="container mb-4">
    <div class="row row-cols-md-4 gy-4">
      <template v-for="card in cards" :key="card.proyecto_id">
        <div v-if="card.proyecto_id === this.currCategory" class="col">
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
      activeBtn: '',
      currCategory: '0'
    }
  },
  components: {
    CardComp
  },
  methods: {
    async fetchData () {
      try {
        const response = await axios.get('https://expoingenieria.com/rest_api_expo/tablas/proyecto/')
        this.cards = response.data
      } catch (error) {
        console.error(error)
      }
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
