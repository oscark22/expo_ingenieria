<template>
  <div class="d-flex justify-content-center mt-4">
    <h2><b>Categorías de proyecto</b></h2>
  </div>
  <div class="container mt-2">
    <div class="text-center">
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button @click="fetchData(urls[0])" type="button" class="btn btn-primary">
          <i class="bi bi-journal-bookmark-fill"></i>
          Académico
        </button>
        <button @click="fetchData(urls[1])" type="button" class="btn btn-secondary">
          <i class="bi bi-cpu"></i>
          Software y multimedia
        </button>
        <button @click="fetchData(urls[1])" type="button" class="btn btn-success">
          <i class="bi bi-box-seam"></i>
          Producto
        </button>
        <button @click="fetchData(urls[1])" type="button" class="btn btn-danger">
          <i class="bi bi-gear-wide-connected"></i>
          Proceso
          </button>
      </div>
    </div>
  </div>
  <br>
  <div class="container">
    <div class="row row-cols-4 gy-4">
      <template v-for="card in cards" :key="card.id">
        <div class="col">
          <p v-if="errorMsg">errorMsg</p>
          <CardComp
            :img_src="card.img_src"
            :title="card.title"
            :description="card.body"
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
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/posts/1'
      ]
    }
  },
  components: {
    CardComp
  },
  methods: {
    fetchData (url) {
      axios
        .get(url)
        .then(response => {
          this.cards = response.data
        })
        .catch(error => {
          console.log(error)
          this.errorMsg = 'Error recuperando información.'
        })
    }
  },
  created () {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.cards = response.data
      })
      .catch(error => {
        console.log(error)
        this.errorMsg = 'Error recuperando información.'
      })
  }
}
</script>
