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
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade }}</label>
            <input v-model="currGrade" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación explicación de concepto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade }}</label>
            <input v-model="currGrade" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación presentación presencial (si aplica)</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade }}</label>
            <input v-model="currGrade" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación aspectos audiovisuales de la presentación</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade }}</label>
            <input v-model="currGrade" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación calidad de exposición verbal</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade }}</label>
            <input v-model="currGrade" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de la participación</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade }}</label>
            <input v-model="currGrade" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de tiempo de la exposición</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade }}</label>
            <input v-model="currGrade" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación del desarrollo de sistemas propios</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade }}</label>
            <input v-model="currGrade" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de originalidad del proyecto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade }}</label>
            <input v-model="currGrade" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de la funcionalidad</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade }}</label>
            <input v-model="currGrade" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de relación entre concepto físico y explicación teórica</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade }}</label>
            <input v-model="currGrade" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de tiempo de respuesta</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade }}</label>
            <input v-model="currGrade" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación del concepto de la comunicación visual (si aplica)</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade }}</label>
            <input v-model="currGrade" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación del diseño del proyecto</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade }}</label>
            <input v-model="currGrade" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de la organización de los elementos</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade }}</label>
            <input v-model="currGrade" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación del diseño de la interfaz</strong>
            </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade }}</label>
            <input v-model="currGrade" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
        </div>
        </div>
    </div>
    <div>
        <p>
            <strong>Calificación general</strong>
        </p>
        <div>
            <label for="gradeRange" class="form-label">Calificación: {{ currGrade }}</label>
            <input v-model="currGrade" type="range" class="form-range" min="0" max="100" step="1" id="gradeRange">
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
      currGrade: 0
    }
  }
}
</script>
