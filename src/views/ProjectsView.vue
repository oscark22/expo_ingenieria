<template>
  <div class="container">
    <div class="text-center">
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-primary">
          <i class="bi bi-journal-bookmark-fill"></i>
          Académico
        </button>
        <button type="button" class="btn btn-secondary">
          <i class="bi bi-cpu"></i>
          Software y multimedia
        </button>
        <button type="button" class="btn btn-success">
          <i class="bi bi-box-seam"></i>
          Producto
        </button>
        <button type="button" class="btn btn-danger">
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
// import json from '@/exp.json'
import axios from 'axios'
import CardComp from '@/components/CardComp.vue'

export default {
  data () {
    return {
      cards: [],
      errorMsg: ''
    }
  },
  components: {
    CardComp
  },
  mounted () {
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
