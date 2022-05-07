<template>
    <div class="mb-4">
        <label for="exampleInputEmail1" class="form-label">Correo electrónico</label>
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="correo@correo.com" aria-describedby="emailHelp">
    </div>
    <div class="row mb-3">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación explicación de contexto general</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade1 }}</label>
            <input v-model="currGrade1" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación explicación de concepto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade2 }}</label>
            <input v-model="currGrade2" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación presentación presencial (si aplica)</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade3 }}</label>
            <input v-model="currGrade3" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación aspectos audiovisuales de la presentación</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade4 }}</label>
            <input v-model="currGrade4" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación calidad de exposición verbal</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade5 }}</label>
            <input v-model="currGrade5" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de la participación</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade6 }}</label>
            <input v-model="currGrade6" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de tiempo de la exposición</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade7 }}</label>
            <input v-model="currGrade7" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación del desarrollo de sistemas propios</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade8 }}</label>
            <input v-model="currGrade8" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de originalidad del proyecto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade9 }}</label>
            <input v-model="currGrade9" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de la funcionalidad</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade10 }}</label>
            <input v-model="currGrade10" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de relación entre concepto físico y explicación teórica</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade11 }}</label>
            <input v-model="currGrade11" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de tiempo de respuesta</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade12 }}</label>
            <input v-model="currGrade12" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación del concepto de la comunicación visual (si aplica)</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade13 }}</label>
            <input v-model="currGrade13" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación del diseño del proyecto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade14 }}</label>
            <input v-model="currGrade14" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de la organización de los elementos</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade15 }}</label>
            <input v-model="currGrade15" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación del diseño de la interfaz</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade16 }}</label>
            <input v-model="currGrade16" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div>
        <p>
            <strong>Calificación general</strong>
        </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade17 }}</label>
            <input v-model="currGrade17" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
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
        3: 0
      },
      currGrade1: 0,
      currGrade2: 0,
      currGrade3: 0,
      currGrade4: 0,
      currGrade5: 0,
      currGrade6: 0,
      currGrade7: 0,
      currGrade8: 0,
      currGrade9: 0,
      currGrade10: 0,
      currGrade11: 0,
      currGrade12: 0,
      currGrade13: 0,
      currGrade14: 0,
      currGrade15: 0,
      currGrade16: 0,
      currGrade17: 0
    }
  }
}
</script>
