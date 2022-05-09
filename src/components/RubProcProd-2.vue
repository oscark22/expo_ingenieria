<template>
    <div class="container text-center mt-5">
        <h2>
            <strong>Rúbrica de categoría 2 de Producto y Proceso</strong>
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
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación explicación de concepto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[2] }}</label>
            <input v-model="currGrade[2]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación presentación presencial (si aplica)</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[3] }}</label>
            <input v-model="currGrade[3]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación aspectos audiovisuales de la presentación</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[4] }}</label>
            <input v-model="currGrade[4]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación fluidez en la presentación</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[5] }}</label>
            <input v-model="currGrade[5]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de la participación en la presentación</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[6] }}</label>
            <input v-model="currGrade[6]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de tiempo de la exposición</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[7] }}</label>
            <input v-model="currGrade[7]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación del desarrollo de sistemas propios del proyecto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[8] }}</label>
            <input v-model="currGrade[8]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de originalidad del proyecto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[9] }}</label>
            <input v-model="currGrade[9]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de la funcionalidad del proyecto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[10] }}</label>
            <input v-model="currGrade[10]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación calidad del vídeo del proyecto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[11] }}</label>
            <input v-model="currGrade[11]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de tiempo de respuesta</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[12] }}</label>
            <input v-model="currGrade[12]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación calidad narrativa y distracciones de la presentación</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade[13] }}</label>
            <input v-model="currGrade[13]" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
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
