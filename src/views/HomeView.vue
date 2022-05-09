<template>
  <div class="inicio container-fluid py-5">
    <div class="container-xxl px-5">
      <div class="row flex-md-row-reverse align-items-center">
        <div class="col col-12 col-md-6 ms-md-auto mb-5 mb-md-0">
          <img src="@/assets/LogoExpo-web-02.png" class="img-fluid" width="550" alt="logo">
        </div>
        <div class="col col-12 col-md-6 ms-md-auto">
          <h1 class="text-white text-uppercase lh-1">
            <p>Expoingeniería CETYS Ensenada</p>
          </h1>
          <p class="lead text-white">
            Descubre los proyectos realizados por los alumnos de la Escuela de Ingeniería de CETYS Universidad Campus Internacional Ensenada, en las distintas categorías de:
            Software y Multimedia, Proceso y Producto y Aplicación en la Industria.
          </p>
          <router-link class="btn btn-light px-4" type="button" to="/projects">
            Proyectos
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-5 px-4 px-md-3" id="contenedor-info">
    <div class="row flex-md-row-reverse align-items-center">
      <div class="col col-12 col-lg-6 ms-md-auto mb-4 mb-lg-0">
        <img src="@/assets/d.jpg" class="img-fluid" alt="logo">
      </div>
      <div class="col col-12 col-lg-6 ms-md-auto">
        <h1 class="fw-bold fs-1">
          <!-- text-center text-md-start -->
          ¿Qué es Expoingeniería?
        </h1>
        <p class="lead text-muted lh-lg pt-2">
         Es el evento más importante de la Escuela de Ingeniería, donde los alumnos tienen la oportunidad de demostrar los conocimientos que están aprendiendo en el aula a
         través de proyectos de aplicación, con innovación y creatividad resolviendo problemas reales, y eso les genera habilidades que van a aplicar cuando egresen
         y se inserten al campo laboral.
        </p>
      </div>
    </div>
  </div>
  <div class="container mt-5 px-4 px-md-3" id="contenedor-info">
    <div class="row p-md-4 gx-md-5 align-items-center">
      <div class="col col-12 col-lg-6 ms-md-auto mb-4 mb-lg-0">
        <img src="@/assets/e.jpg" class="img-fluid" alt="logo">
      </div>
      <div class="col col-12 col-lg-6 ms-md-auto">
        <h1 class="fw-bold fs-1">
          Escuela de Ingeniería
        </h1>
        <p class="lead text-muted lh-lg pt-2">
          Los alumnos de CETYS Universidad aplicarán sus conocimientos adquiridos en la escuela de ingeniería,
          poniendo en práctica sus habilidades en distintos proyectos, relacionados a sus respectivas áreas profesionales
          impulsando así, la innovación, ingenio y emprendedurismo en la comunidad académica.
        </p>
      </div>
    </div>
  </div>
  <div class="container mt-4">
    <div class="container-fluid text-center text-md-end fs-1 fw-light mb-3">
      Preguntas Frecuentes
    </div>
    <div class="accordion" id="preguntas">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            ¿Qué horarios hay de exposición presencial?
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne">
          <div class="accordion-body">
            9 a.m. a 1 p.m. y 3 p.m. a 7 p.m. el lunes 16 de mayo.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            ¿Qué horarios hay de exposición virtual?
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo">
          <div class="accordion-body">
            Martes y miércoles 17 y 18 de mayo de 9 a.m. a 1 p.m. y 3 p.m. a 7 p.m.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            ¿Qué tipos de proyectos puedo ver en cada categoría?
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree">
          <div class="accordion-body">
            Proyectos académicos (de primeros semestres), proyectos de asignatura o independientes, proyectos ligados a empresas y proyectos de software y multimedia.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            ¿En qué consisten las categorías?
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour">
          <div class="accordion-body">
            Categorías de innovación de producto, de proceso, de software y/o multimedia. La categoría 1 es de fase inicial y la categoría 2 es de fase de implementación o prototipo funcional.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFive">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            ¿Cómo puedo navegar en el sitio?
          </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive">
          <div class="accordion-body">
            <a href="">Vídeo tutorial</a>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingSix">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            Si soy juez, ¿cómo puedo evaluar?
          </button>
        </h2>
        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix">
          <div class="accordion-body">
            <a href="">Vídeo tutorial</a>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingSeven">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
            ¿Puedo evaluar los proyectos si soy público general?
          </button>
        </h2>
        <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven">
          <div class="accordion-body">
            Existirá una categoría de proyecto más votado por el público, la cual se podrá hacer el día lunes presencialmente.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingEight">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
            ¿Me tengo que registrar?
          </button>
        </h2>
        <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight">
          <div class="accordion-body">
            No, solo el día lunes 16 de mayo que el evento es presencial.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingNine">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
            ¿También tendrán conferencias?
          </button>
        </h2>
        <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine">
          <div class="accordion-body">
            Sí, en el congreso CIAP el día jueves 19 y viernes 20 de mayo.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTen">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
            ¿Tiene costo?
          </button>
        </h2>
        <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen">
          <div class="accordion-body">
            No, es gratis en ambas modalidades tanto las conferencias como los proyectos.
          </div>
        </div>
      </div>
            <div class="accordion-item">
        <h2 class="accordion-header" id="headingEleven">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
            ¿Las conferencias serán virtuales?
          </button>
        </h2>
        <div id="collapseEleven" class="accordion-collapse collapse" aria-labelledby="headingEleven">
          <div class="accordion-body">
            Sí.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .inicio{
    background:
      linear-gradient(
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.9)
      );

    background-color: gray;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
</style>
