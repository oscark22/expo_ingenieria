<template>
  <div class="inicio container-fluid py-5">
    <div class="row py-5" align="center">
      <div class="col py-5">
        <img src="../assets/logo_expo.png" class="img-fluid" width="550" id="logo-expo">
      </div>
      <div class="text-center">
        <router-link class="btn btn-warning text-black rounded-pill scrollto py-2 px-5 fs-4" to="/projects">
            Proyectos
        </router-link>
      </div>
    </div>
  </div>
  <div class="container mt-5" id="contenedor-info">
    <div class="row flex-lg-row-reverse p-4 gx-5 align-items-center">
      <div class="col">
        <img src="@/assets/d.jpg" class="img-fluid" alt="logo">
      </div>
      <div class="col col-lg-6">
        <h2 class="fw-light">
          ¿Qué es la Expo Ingeniería?
        </h2>
        <p class="lead text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nesciunt. Corporis facilis blanditiis modi ratione libero adipisci, ipsam id nostrum quidem aliquid at recusandae delectus eius! Quo voluptatum commodi vero. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor neque asperiores fugiat provident! Nam praesentium delectus maxime animi voluptate debitis.
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
        <h2 class="fw-light">
          ¿Una pregunta random?
        </h2>
        <p class="lead text-muted">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, dolorum, cupiditate a magni soluta unde reiciendis dolore optio facilis animi fuga nisi asperiores exercitationem quasi enim minima voluptatem suscipit necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptas neque tempora laudantium inventore. Odit tempore corporis quasi porro.
        </p> <!-- Column inside another column? -->
        <div class="col-4 mx-auto mt-4">
          <router-link class="btn btn-warning rounded-pill py-2 px-4" to="/projects">Proyectos</router-link>
        </div>
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
  <footer class="footer pt-5 mt-5 mb-2">
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

<style>
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
  body{
    font-family: Montserrat;
  }
</style>
