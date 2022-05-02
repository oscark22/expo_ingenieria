<template>
  <div class="container-fluid text-white text-center p-3 mt-0 mt-md-5" id="Proy">
    <div class="row mb-3">
      <div class="col col-md-6 mx-auto">
        <h1 class="display-5 fw-light fw-bold">
          Proyectos
        </h1>
        <p class="lead">
          Los proyectos se encuentran organizados según su clasificación. Elige de las categorías de proyecto disponibles.
        </p>
      </div>
    </div>
    <div class="btn-group" role="group" aria-label="Basic outlined example">
      <div>
      <button @click="fetchData(); activeBtn='btn1'; currCategory='0'" type="button" class="btn">
        <img src="../assets/iconos-08.png" width="45" height="50">
      </button>
      </div>
      <button @click="activeBtn='btn2'" type="button" class="btn">
        <img src="../assets/iconos-07.png" width="45" height="50">
      </button>
      <button @click="fetchData(); activeBtn='btn3'; currCategory='3'" type="button" class="btn">
        <img src="../assets/iconos-06.png" width="45" height="50">
      </button>
      <button @click="activeBtn='btn4'" type="button" class="btn">
        <img src="../assets/iconos-05.png" width="45" height="50">
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
<style scoped>
  #Proy{
    background: #6798C0;
  }
</style>
