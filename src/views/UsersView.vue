<template>
  <div class="container py-4 my-5">
    <div class="row">
      <div class="col">
        <h1 class="fw-light">
          Datos de Proyecto
        </h1>
        <p class="lead text-muted">
          Este apartado está dedicado a la agregación de los links de la sala Meet de Google donde se presentará el proyecto, así como un enlace al video de dicho proyecto.
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <form @submit.prevent="pData" class="row g-4 mb-5 needs-validation" novalidate>
      <div class="col-md-12">
        <label for="youtubeControl" class="form-label">Link de la sesión de Google Meet</label>
        <input v-model="article.url_sala" type="text" class="form-control" id="youtubeControl" placeholder="Link de Meet." required>
        <div class="invalid-feedback">
          Asegúrate de insertar un link de Google Meet.
        </div>
      </div>
      <div class="col-md-12">
        <label for="meetControl" class="form-label">Link del video de Youtube</label>
        <input v-model="article.url_video" type="text" class="form-control" id="meetControl" placeholder="Link de Youtube." required>
        <div class="invalid-feedback">
          Asegúrate de insertar un link de Youtube.
        </div>
      </div>
      <div class="col-12">
        <button @click="postData" class="btn btn-primary" type="button">
          Confirmar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      url_sala: '',
      url_video: '',
      articleId: 0,
      article: {
        nombre_equipo: 'nombre_random',
        nombre_proyecto: 'un_nombre',
        descripcion: 'una descripcion',
        url_sala: '',
        url_video: '',
        asesor_id: 1,
        categoria_id: 1,
        lineaInvestigacion_id: 1,
        tipoProyecto_id: 1,
        nivel_id: 1,
        asignatura_id: 1
      }
    }
  },
  methods: {
    // async postData () {
    //   try {
    //     const response = await axios.post('http://localhost:3000/posts/', this.article)
    //     this.articleId = response.data.id
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    postData () {
      axios
        .post('https://expoingenieria.com/rest_api_expo/tablas/proyecto/', this.article)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style>

</style>
