<template>
    <div class="container text-center mt-5">
        <h2>
            <strong>Rúbrica de categoría Académica</strong>
        </h2>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación explicación de contexto general</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[2] }}</label>
            <input v-model="grades.grade[2]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación explicación de concepto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[3] }}</label>
            <input v-model="grades.grade[3]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación presentación presencial (si aplica)</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[4] }}</label>
            <input v-model="grades.grade[4]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación aspectos audiovisuales de la presentación</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[5] }}</label>
            <input v-model="grades.grade[5]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación fluidez en la presentación</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[6] }}</label>
            <input v-model="grades.grade[6]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación de la participación</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[7] }}</label>
            <input v-model="grades.grade[7]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de tiempo de la exposición</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[8] }}</label>
            <input v-model="grades.grade[8]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación del desarrollo de sistemas propios</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[9] }}</label>
            <input v-model="grades.grade[9]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de originalidad del proyecto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[10] }}</label>
            <input v-model="grades.grade[10]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación de la funcionalidad del proyecto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[11] }}</label>
            <input v-model="grades.grade[11]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de relación entre concepto físico y explicación teórica</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[12] }}</label>
            <input v-model="grades.grade[12]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación de tiempo de respuesta</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[13] }}</label>
            <input v-model="grades.grade[13]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación del concepto de la comunicación visual (si aplica)</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[14] }}</label>
            <input v-model="grades.grade[14]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación del diseño del proyecto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[15] }}</label>
            <input v-model="grades.grade[15]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de la organización de los elementos</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[16] }}</label>
            <input v-model="grades.grade[16]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación del diseño de la interfaz del proyecto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[17] }}</label>
            <input v-model="grades.grade[17]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div>
        <p>
            <strong>Calificación general</strong>
        </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[1] }}</label>
            <input v-model="grades.grade[1]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
    </div>
    <div class="form-floating">
        <textarea v-model="grades.desc" class="form-control" placeholder="Deje un comentario en este espacio" id="floatingTextarea" style="height: 100px"></textarea>
        <label for="floatingTextarea">Comentarios adicionales</label>
    </div>
    <button @click="grades.postAcademic()" class="btn btn-warning btn-lg mt-4" type="button">
        Enviar
    </button>
</template>

<script setup>

import { evalStore } from '@/stores/evalStore'

const grades = evalStore()

</script>

<script>
export default {

  props: ['img_url', 'curr_category', 'nombre_equipo', 'card_id', 'nombre_proyecto', 'descripcion', 'url_sala', 'url_video'],

  data () {
    return {
      currGrade: {
        1: '0',
        2: '0',
        3: '0',
        4: '0',
        5: '0',
        6: '0',
        7: '0',
        8: '0',
        9: '0',
        10: '0',
        11: '0',
        12: '0',
        13: '0',
        14: '0',
        15: '0',
        16: '0',
        17: '0'
      }
    }
  }
}
</script>
