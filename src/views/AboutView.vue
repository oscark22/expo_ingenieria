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
import { CardComp } from '@/components/CardComp.vue'

export default {
  props: ['cards'],
  components: {
    CardComp
  }
}
</script>
