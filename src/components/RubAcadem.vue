<template>
    <div class="mb-4">
        <label for="exampleInputEmail1" class="form-label">Correo</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div>
        <p>
           <strong>Calificación general</strong>
        </p>
    </div>
    <div>
        <select class="form-select mb-4" aria-label="Default select example">
        <option selected>Calificación</option>
        <option value="1">0-25</option>
        <option value="2">26-50</option>
        <option value="3">51-75</option>
        <option value="3">76-100</option>
        </select>
    </div>
    <div>
        <p>
            <strong>Calificación del Contexto</strong>
        </p>
    </div>
    <div>
        <select class="form-select mb-4" aria-label="Default select example">
        <option selected>Calificación</option>
        <option value="1">0-25</option>
        <option value="2">26-50</option>
        <option value="3">51-75</option>
        <option value="3">76-100</option>
        </select>
    </div>
    <div>
        <p>
            <strong>Calificación de explicación Concepto</strong>
        </p>
    </div>
    <div>
        <select class="form-select mb-4" aria-label="Default select example">
        <option selected>Calificación</option>
        <option value="1">0-25</option>
        <option value="2">26-50</option>
        <option value="3">51-75</option>
        <option value="3">76-100</option>
        </select>
    </div>
    <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label for="floatingTextarea">Comentarios adicionales</label>
    </div>
</template>
