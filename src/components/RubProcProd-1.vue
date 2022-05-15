<template>
    <div class="container text-center my-5">
        <h2>
            <strong>Rúbrica de categoría 1 de Proceso y Producto</strong>
        </h2>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación explicación de contexto general</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[2] }} ({{ grades.checkState(2) }})</label>
            <input v-model="grades.grade[2]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación explicación de concepto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[3] }} ({{ grades.checkState(3) }})</label>
            <input v-model="grades.grade[3]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de la calidad narrativa y distracciones</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[9] }} ({{ grades.checkState(9) }})</label>
            <input v-model="grades.grade[9]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación aspectos audiovisuales de la presentación</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[4] }} ({{ grades.checkState(4) }})</label>
            <input v-model="grades.grade[4]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación fluidez en la presentación</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[5] }} ({{ grades.checkState(5) }})</label>
            <input v-model="grades.grade[5]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación de la participación</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[6] }} ({{ grades.checkState(6) }})</label>
            <input v-model="grades.grade[6]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de tiempo de la exposición</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[7] }} ({{ grades.checkState(7) }})</label>
            <input v-model="grades.grade[7]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación de originalidad del proyecto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[11] }} ({{ grades.checkState(11) }})</label>
            <input v-model="grades.grade[11]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de la funcionalidad del proyecto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[12] }} ({{ grades.checkState(12) }})</label>
            <input v-model="grades.grade[12]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación de vídeo del proyecto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[10] }} ({{ grades.checkState(10) }})</label>
            <input v-model="grades.grade[10]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de relación entre concepto físico y explicación teórica</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[8] }} ({{ grades.checkState(8) }})</label>
            <input v-model="grades.grade[8]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div>
        <p>
            <strong>Calificación general</strong>
        </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grades.grade[1] }} ({{ grades.checkState(1) }})</label>
            <input v-model="grades.grade[1]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
    </div>
    <div class="form-floating mt-3">
        <textarea  v-model="grades.desc" class="form-control" placeholder="Deje un comentario en este espacio" id="floatingTextarea" style="height: 100px"></textarea>
        <label for="floatingTextarea">Comentarios adicionales</label>
    </div>
    <button @click="grades.postProd1()" class="btn btn-warning btn-lg mt-4" type="submit" data-bs-toggle="modal" data-bs-target="#projectModal">
        Enviar
    </button>
    <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xs">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="projectModalLabel">Calificaciones del proyecto</h5>
          </div>
          <div class="modal-body">
            <template v-if="grades.estadoModal">
              <p>
                La evaluación del proyecto ha sido guardada exitosamente.
              </p>
            </template>
            <template v-else>
              <p>
                La evaluación del proyecto actual no ha sido guardada de manera exitosa. Recuerda que sólo es posible calificar una vez el mismo proyecto.
              </p>
            </template>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { evalStore } from '@/stores/evalStore'

const grades = evalStore()
</script>
