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
            <label for="gradeRange" class="form-label">Calificación: {{ grade.grades[2] }}</label>
            <input v-model="grade.grades[2]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación explicación de concepto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grade.grades[3] }}</label>
            <input v-model="grade.grades[3]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación presentación física</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grade.grades[4] }}</label>
            <input v-model="grade.grades[4]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación aspectos audiovisuales de la presentación</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grade.grades[5] }}</label>
            <input v-model="grade.grades[5]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación fluidez en la presentación</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grade.grades[6] }}</label>
            <input v-model="grade.grades[6]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación de la participación</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grade.grades[7] }}</label>
            <input v-model="grade.grades[7]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de tiempo de la exposición</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grade.grades[8] }}</label>
            <input v-model="grade.grades[8]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación del desarrollo de sistemas propios</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grade.grades[9] }}</label>
            <input v-model="grade.grades[9]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de originalidad del proyecto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grade.grades[10] }}</label>
            <input v-model="grade.grades[10]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación de la funcionalidad del proyecto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grade.grades[11] }}</label>
            <input v-model="grade.grades[11]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de relación entre concepto físico y explicación teórica</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grade.grades[12] }}</label>
            <input v-model="grade.grades[12]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación de tiempo de respuesta</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grade.grades[13] }}</label>
            <input v-model="grade.grades[13]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación del concepto de la comunicación visual (si aplica)</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grade.grades[14] }}</label>
            <input v-model="grade.grades[14]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación del diseño del proyecto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grade.grades[15] }}</label>
            <input v-model="grade.grades[15]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de la organización de los elementos</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grade.grades[16] }}</label>
            <input v-model="grade.grades[16]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación del diseño de la interfaz del proyecto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grade.grades[17] }}</label>
            <input v-model="grade.grades[17]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div>
        <p>
            <strong>Calificación general</strong>
        </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ grade.grades[1] }}</label>
            <input v-model="grade.grades[1]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
    </div>
    <div class="form-floating">
        <textarea class="form-control" placeholder="Deje un comentario en este espacio" id="floatingTextarea" style="height: 100px"></textarea>
        <label for="floatingTextarea">Comentarios adicionales</label>
    </div>
</template>

<script setup>

import { evalStore } from '@/stores/evalStore'

const grade = evalStore()

</script>

<script>

</script>
