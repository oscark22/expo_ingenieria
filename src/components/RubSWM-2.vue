<template>
    <div class="container text-center mt-5">
        <h2>
            <strong>Rúbrica de categoría 2 de Software y Multimedia </strong>
        </h2>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación explicación de contexto general</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[1] }}</label>
            <input v-model="currGrade[1]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación explicación de concepto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[2] }}</label>
            <input v-model="currGrade[2]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación presentación presencial (si aplica)</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[3] }}</label>
            <input v-model="currGrade[3]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación aspectos audiovisuales de la presentación</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[4] }}</label>
            <input v-model="currGrade[4]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación calidad de fluidez en la presentación</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[5] }}</label>
            <input v-model="currGrade[5]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación de la participación</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[6] }}</label>
            <input v-model="currGrade[6]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de tiempo de la exposición</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[7] }}</label>
            <input v-model="currGrade[7]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación del desarrollo de sistemas propios</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[8] }}</label>
            <input v-model="currGrade[8]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de originalidad del proyecto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[9] }}</label>
            <input v-model="currGrade[9]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación de la funcionalidad</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[10] }}</label>
            <input v-model="currGrade[10]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de la calidad Narrativa y Distracciones</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[11] }}</label>
            <input v-model="currGrade[11]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación de la calidad del vídeo del proyecto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[12] }}</label>
            <input v-model="currGrade[12]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación del concepto de la comunicación visual (si aplica)</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[13] }}</label>
            <input v-model="currGrade[13]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación del diseño del proyecto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[14] }}</label>
            <input v-model="currGrade[14]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row mb-3 mt-4">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de la organización de los elementos</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[15] }}</label>
            <input v-model="currGrade[15]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
            <p>
                <strong>Calificación del diseño de la interfaz</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[16] }}</label>
            <input v-model="currGrade[16]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div>
        <p>
            <strong>Calificación general</strong>
        </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[17] }}</label>
            <input v-model="currGrade[17]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
    </div>
    <div class="form-floating">
        <textarea class="form-control" placeholder="Deje un comentario en este espacio" id="floatingTextarea" style="height: 100px"></textarea>
        <label for="floatingTextarea">Comentarios adicionales</label>
    </div>
</template>

<script>
export default {
  data () {
    return {
      // prefered method
      currGrade: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
        13: 0,
        14: 0,
        15: 0,
        16: 0,
        17: 0
      }
    }
  }
}
</script>
