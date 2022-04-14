<template>
  <div v-for="card in cards" :key="card.id">
    <CardComp
      :img_src="card.img_src"
      :title="card.title"
      :description="card.description"
    />
  </div>
  <p1>Bye!</p1>
</template>

<script>
import json from '@/exp.json'
import CardComp from '@/components/CardComp.vue'

export default {
  data () {
    return {
      cards: json
    }
  },
  components: {
    CardComp
  }
}
</script>
