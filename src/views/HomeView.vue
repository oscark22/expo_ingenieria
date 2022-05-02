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
            Descubre los proyectos realizados por los alumnos de la Escuela de Ingeniería de CETYS Universidad Campus Internacional Ensenada, en las distintas categorías de: Multimedia y Software, Producto, Académico y Proceso.
          </p>
          <button class="btn btn-light px-4" type="button">
            Proyectos
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-5" id="contenedor-info">
    <div class="row flex-lg-row-reverse flex-md-row-reverse p-lg-4 gx-lg-5 align-items-center">
      <div class="col col-lg-6 col-md-4 col-sm-4">
        <img src="@/assets/d.jpg" class="img-fluid" alt="logo">
      </div>
      <div class="col col-lg-6 col-md-8 col-sm-8">
        <h1 class="fw-bold fs-1">
          ¿Qué es Expoingeniería?
        </h1>
        <p class="lead text-muted lh-lg py-4">
         Es el evento más importante de la Escuela de Ingeniería, donde los alumnos tienen la oportunidad de demostrar los conocimientos que están aprendiendo en el aula a
         través de proyectos de aplicación, con innovación y creatividad resolviendo problemas reales, y eso les genera habilidades que van a aplicar cuando egresen
         y se inserten al campo laboral.
        </p>
      </div>
    </div>
  </div>
  <div class="container mt-lg-4 mb-md-3" id="contenedor-info">
    <div class="row p-lg-4 gx-lg-5 align-items-center">
      <div class="col col-lg-6 col-md-4 col-sm-4">
        <img src="@/assets/e.jpg" class="img-fluid" alt="logo">
      </div>
      <div class="col col-lg-6 col-md-8 col-sm-8">
        <h1 class="fw-bold fs-1">
          Escuela de Ingeniería
        </h1>
        <p class="lead text-muted lh-lg py-lg-4">
          Los alumnos de CETYS Universidad aplicarán sus conocimientos adquiridos en la escuela de ingeniería,
          poniendo en práctica sus habilidades en distintos proyectos, relacionados a sus respectivas áreas profesionales
          impulsando así, la innovación, ingenio y emprendedurismo en la comunidad académica.
        </p>
      </div>
    </div>
  </div>
  <div class="container mt-4">
    <div class="container-fluid text-center text-md-end text-lg-end fs-1 mb-3">
      Preguntas Frecuentes
    </div>
    <div class="accordion" id="preguntas">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            ¿Qué horario tendrá la Expo-ingeniería 2022?
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne">
          <div class="accordion-body">
            La Expo-ingeniería 2022 tendrá un <strong>modelo híbrido;</strong> el día lunes 16 de mayo, los proyectos serán exhibidos 100% presencial dentro del campus, con un horario de 9 a.m. hasta las 7 p.m.
            Los días 17 y 18 de mayo, los proyectos serán mostrados en línea a través de un link de Google Meet al que se podrá acceder desde el proyecto ubicado en la página.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo">
          <div class="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree">
          <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
        rgba(0, 0, 0, 0.7)
      ),
      url(../assets/edificio.jpg);

    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
</style>
