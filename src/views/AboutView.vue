<template>
  <div v-for="card in cards" :key="card.id">
    <p v-if="errorMsg">errorMsg</p>
    <CardComp
      :img_src="card.img_src"
      :title="card.title"
      :description="card.description"
    />
  </div>
  <p1>Bye!</p1>
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
