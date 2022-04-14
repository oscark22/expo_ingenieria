<template>
  <div class="card" style="width: 18rem;">
  <img :src="img_src" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['img_src', 'title', 'description']
}
</script>
