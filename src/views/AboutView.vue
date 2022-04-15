<template>
  <div class="container">
    <div class="row row-cols-auto row-cols-md-4 gy-4">
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
