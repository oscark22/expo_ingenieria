<template>
  <div class="container py-4 py-md-4 my-md-5">
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
        <input v-model="url_sala" type="text" class="form-control" id="youtubeControl" placeholder="Link de Meet." required>
        <div class="invalid-feedback">
          Asegúrate de insertar un link de Google Meet.
        </div>
      </div>
      <div class="col-md-12">
        <label for="meetControl" class="form-label">Link del video de Youtube</label>
        <input v-model="url_video" type="text" class="form-control" id="meetControl" placeholder="Link de Youtube." required>
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
      articleId: ''
    }
  },
  methods: {
    async postData () {
      const url = 'https://expoingenieria.com/rest_api_expo/tablas/proyecto/'
      const params = this.axiosParams
      const config = this.axiosConfig

      try {
        const response = await axios.post(url, params, config)
        // this.articleId = response.data.id
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {
    axiosParams () {
      const params = new URLSearchParams()
      params.append('nombre_equipo', 'nombre_random')
      params.append('nombre_proyecto', 'un_nombre')
      params.append('descripcion', 'una descripcion')
      params.append('url_sala', this.url_sala)
      params.append('url_video', this.url_video)
      params.append('categoria_id', 1)
      params.append('asesor_id', 1)
      params.append('lineaInvestigacion_id', 1)
      params.append('tipoProyecto_id', 1)
      params.append('nivel_id', 1)
      params.append('asignatura_id', 1)
      return params
    },
    axiosConfig () {
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      return config
    }
  }
}
</script>

<style>

</style>
