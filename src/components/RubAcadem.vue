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
            <div class="col-auto">
                <input type="number" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
            </div>
            <div class="col-auto">
                <span id="passwordHelpInline" class="form-text">
                Must be 8-20 characters long.
                </span>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación explicación de concepto</strong>
            </p>
            <select class="form-select mb-4" aria-label="Default select example">
                <option selected>No aplica</option>
                <option value="1">0-25</option>
                <option value="2">26-50</option>
                <option value="3">51-75</option>
                <option value="4">76-100</option>
            </select>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación presentación presencial (si aplica)</strong>
            </p>
            <select class="form-select mb-4" aria-label="Default select example">
                <option selected>No aplica</option>
                <option value="1">0-25</option>
                <option value="2">26-50</option>
                <option value="3">51-75</option>
                <option value="4">76-100</option>
            </select>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación aspectos audiovisuales de la presentación</strong>
            </p>
            <select class="form-select mb-4" aria-label="Default select example">
                <option selected>Calificación</option>
                <option value="1">0-25</option>
                <option value="2">26-50</option>
                <option value="3">51-75</option>
                <option value="4">76-100</option>
            </select>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación calidad de exposición verbal</strong>
            </p>
            <select class="form-select mb-4" aria-label="Default select example">
                <option selected>Calificación</option>
                <option value="1">0-25</option>
                <option value="2">26-50</option>
                <option value="3">51-75</option>
                <option value="4">76-100</option>
            </select>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de la participación</strong>
            </p>
            <select class="form-select mb-4" aria-label="Default select example">
                <option selected>Calificación</option>
                <option value="1">0-25</option>
                <option value="2">26-50</option>
                <option value="3">51-75</option>
                <option value="4">76-100</option>
            </select>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de tiempo de la exposición</strong>
            </p>
            <select class="form-select mb-4" aria-label="Default select example">
                <option selected>Calificación</option>
                <option value="1">0-25</option>
                <option value="2">26-50</option>
                <option value="3">51-75</option>
                <option value="4">76-100</option>
            </select>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación del desarrollo de sistemas propios</strong>
            </p>
            <select class="form-select mb-4" aria-label="Default select example">
                <option selected>Calificación</option>
                <option value="1">0-25</option>
                <option value="2">26-50</option>
                <option value="3">51-75</option>
                <option value="4">76-100</option>
            </select>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de originalidad del proyecto</strong>
            </p>
            <select class="form-select mb-4" aria-label="Default select example">
                <option selected>Calificación</option>
                <option value="1">0-25</option>
                <option value="2">26-50</option>
                <option value="3">51-75</option>
                <option value="4">76-100</option>
            </select>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de la funcionalidad</strong>
            </p>
            <select class="form-select mb-4" aria-label="Default select example">
                <option selected>Calificación</option>
                <option value="1">0-25</option>
                <option value="2">26-50</option>
                <option value="3">51-75</option>
                <option value="4">76-100</option>
            </select>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de relación entre concepto físico y explicación teórica</strong>
            </p>
            <select class="form-select mb-4" aria-label="Default select example">
                <option selected>Calificación</option>
                <option value="1">0-25</option>
                <option value="2">26-50</option>
                <option value="3">51-75</option>
                <option value="4">76-100</option>
            </select>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de tiempo de respuesta</strong>
            </p>
            <select class="form-select mb-4" aria-label="Default select example">
                <option selected>Calificación</option>
                <option value="1">0-25</option>
                <option value="2">26-50</option>
                <option value="3">51-75</option>
                <option value="4">76-100</option>
            </select>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación del concepto de la comunicación visual (si aplica)</strong>
            </p>
            <select class="form-select mb-4" aria-label="Default select example">
                <option selected>Calificación</option>
                <option value="1">0-25</option>
                <option value="2">26-50</option>
                <option value="3">51-75</option>
                <option value="4">76-100</option>
            </select>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación del diseño del proyecto</strong>
            </p>
            <select class="form-select mb-4" aria-label="Default select example">
                <option selected>Calificación</option>
                <option value="1">0-25</option>
                <option value="2">26-50</option>
                <option value="3">51-75</option>
                <option value="4">76-100</option>
            </select>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación de la organización de los elementos</strong>
            </p>
            <select class="form-select mb-4" aria-label="Default select example">
                <option selected>Calificación</option>
                <option value="1">0-25</option>
                <option value="2">26-50</option>
                <option value="3">51-75</option>
                <option value="4">76-100</option>
            </select>
        </div>
        <div class="col-12 col-md-6">
            <p>
                <strong>Calificación del diseño de la interfaz</strong>
            </p>
            <select class="form-select mb-4" aria-label="Default select example">
                <option selected>Calificación</option>
                <option value="1">0-25</option>
                <option value="2">26-50</option>
                <option value="3">51-75</option>
                <option value="4">76-100</option>
            </select>
        </div>
    </div>
    <div>
        <p>
            <strong>Calificación general</strong>
        </p>
        <select class="form-select mb-4" aria-label="Default select example">
        <option selected>Calificación</option>
        <option value="1">0-25</option>
        <option value="2">26-50</option>
        <option value="3">51-75</option>
        <option value="4">76-100</option>
        </select>
    </div>
    <div class="form-floating">
        <textarea class="form-control" placeholder="Deje un comentario en este espacio" id="floatingTextarea" style="height: 100px"></textarea>
        <label for="floatingTextarea">Comentarios adicionales</label>
    </div>
</template>
