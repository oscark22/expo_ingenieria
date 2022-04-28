<template>
  <div class="inicio container-fluid py-5">
    <div class="container-fluid" id="contenedor-info">
      <div class="row flex-lg-row-reverse p-4 gx-5 align-items-center">
        <div class="col-6 px-5">
          <img src="@/assets/LogoExpo-web-02.png" class="img-fluid" width="550" alt="logo">
        </div>
        <div class="col-4 p-1">
          <h1 class="text-white" id="titulo">
            <p>EXPOINGENIERÍA</p>
            <p>CETYS ENSENADA</p>
          </h1>
          <p class="text-white fs-6 lh-2">
            Descubre los proyectos realizados por los alumnos de
            la Escuela de Ingeniería de CETYS Universidad Campus Internacional Ensenada, en las distintas categorías de: Multimedia y Software, Producto, Académico y Proceso.
          </p>
          <div class="col-4">
            <router-link class="btn btn-light py-2 px-5" to="/projects">PROYECTOS</router-link>
        </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-5" id="contenedor-info">
    <div class="row flex-lg-row-reverse p-4 gx-5 align-items-center">
      <div class="col">
        <img src="@/assets/d.jpg" class="img-fluid" alt="logo">
      </div>
      <div class="col col-lg-6">
        <h1 class="fw-bold fs-1">
          ¿Qué es Expoingeniería?
        </h1>
        <p class="lead text-muted lh-lg py-4">
         Es el evento más importante de la Escuela de Ingeniería, donde los alumnos tienen la oportunidad de demostrar los conocimientos que están aprendiendo en el aula a
         través de en proyectos de aplicación, con innovación y creatividad resolviendo problemas reales, y eso les genera habilidades que van a aplicar cuando egresen
         y se inserten al campo laboral.
        </p>
      </div>
    </div>
  </div>
  <div class="container mt-4" id="contenedor-info">
    <div class="row p-4 gx-5 align-items-center">
      <div class="col">
        <img src="@/assets/e.jpg" class="img-fluid" alt="logo">
      </div>
      <div class="col col-lg-6">
        <h1 class="fw-bold fs-1">
          Escuela de Ingeniería
        </h1>
        <p class="lead text-muted lh-lg py-4">
          Los alumnos de CETYS Universidad aplicaran sus conocimientos adquiridos en la escuela de ingenieria,
          poniendo en practica sus habilidades en distintos proyectos, relacionados a sus respectivas areas profesionales
          impulsando asi, la innovacion, ingenio y emprendedurismo en la comunidad academica.
        </p> <!-- Column inside another column? -->
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="accordion" id="preguntas">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
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
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
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
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
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
  <footer class="footer pt-4 pb-4 mt-5 mb-2">
    <div class="container-fluid">
      <div class="row gx-5 px-5 mx-5 justify-content-center">
        <div class="col">
          <img src="@/assets/logo_campus.png" class="img-fluid" width="200" alt="logo_campus">
        </div>
        <div class="col">
          <img src="@/assets/logo_ceid.png" class="img-fluid" width="200" alt="logo_ceid">
        </div>
        <div class="col">
          <img src="@/assets/logo_expo_anio.png" class="img-fluid" width="200" alt="logo_expo">
        </div>
        <div class="col">
          <img src="@/assets/logo_tyva.png" class="img-fluid" width="200" alt="logo_tyva">
        </div>
        <div class="col">
          <img src="@/assets/logo_ciap.png" class="img-fluid" width="200" alt="logo_ciap">
        </div>
      </div>
    </div>
  </footer>
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
    height: 650px;
  }
  .rounded-pill{
    border-radius: 50rem;
  }
  .btn-warning{
      display: inline-block;
  }
  #titulo{
    font-size: 50px;
  }
</style>
