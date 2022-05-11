<template>
  <div>
    <div class="card h-100">
      <img :src="img_src" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{ nombre_proyecto }}</h5>
        <p class="card-text">No. Proyecto: {{ card_id }}</p>
        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" :data-bs-target="'#myModal' + card_id">
          Ver proyecto
        </button>
      </div>
      <div class="card-footer">
      </div>
    </div>
    <div class="modal fade" :id="'myModal' + card_id" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="myModalLabel">{{ nombre_proyecto }}</h5>
          </div>
          <div class="modal-body">
            <p class="text">
              Descripción del proyecto:
            </p>
            <p class="text">
              {{ descripcion }}
            </p>
            <template v-if="url_video !== 'por determinar' && url_sala !== 'por determinar'">
              <p class="mt-4">
                <a @onclick="url_video" target="_blank" class="btn btn-danger me-2">
                    Youtube <i class="bi bi-youtube"></i>
                </a>
                <a @onclick="url_sala" target="_blank" class="btn btn-primary">
                    Skype <i class="bi bi-skype"></i>
                </a>
              </p>
            </template>
            <template v-else>
              <p class="mt-4">
                Los links correspondientes no han sido añadidos por el equipo.
              </p>
            </template>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['card_id', 'img_src', 'nombre_proyecto', 'descripcion', 'url_sala', 'url_video']
}
</script>

<style scoped>
  .card{
    box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
  }
  .card:hover{
    transform: scale(1.03);
    box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
  }
</style>
