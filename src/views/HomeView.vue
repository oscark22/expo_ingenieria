<template>
  <div class="backround container-fluid py-5" id="inicio">
    <div class="row py-5" align="center">
      <div class="col py-5">
        <img src="../assets/logo_expo.png" class="img-fluid" width="550" id="logo-expo">
      </div>
    </div>
  </div>
  <div class="container">
  <div class="container mt-5">
    <div class="row flex-lg-row-reverse p-4 gx-5 align-items-center">
      <div class="col"> <!-- Do dynamic right-align -->
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
    <div class="container mt-4">
    <div class="row p-4 gx-5 align-items-center">
      <div class="col"> <!-- Do dynamic right-align -->
        <img src="@/assets/e.jpg" class="img-fluid" alt="logo">
      </div>
      <div class="col col-lg-6">
        <h2 class="fw-light">
          ¿Una pregunta random?
        </h2>
        <p class="lead text-muted">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, dolorum, cupiditate a magni soluta unde reiciendis dolore optio facilis animi fuga nisi asperiores exercitationem quasi enim minima voluptatem suscipit necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptas neque tempora laudantium inventore. Odit tempore corporis quasi porro.
        </p>
      <div class="col-4 mx-auto">
        <router-link class="btn btn-warning" to="/projects">Projectos</router-link>
      </div>
      </div>
    </div>
  </div>
  <div class="backround container-fluid py-5" id="lugar_logos">
    <div class="row justify-content-center">
      <div class="col-xs-6 col-sm-3 text-center">
        <img src="../assets/logo_expo_anio.png" class="img-fluid" alt="...">
      </div>
      <div class="col-xs-6 col-sm-3 text-center">
        <img src="../assets/logo_tyva.png" class="img-fluid" alt="...">
      </div>
      <div class="col-xs-6 col-sm-3 text-center">
        <img src="../assets/logo_ceid.png" class="img-fluid" alt="...">
      </div>
      <div class="col-xs-6 col-sm-3 text-center">
        <img src="../assets/logo_ciap.png" class="img-fluid" alt="...">
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            ¿Qué horario tendrá la Expo-ingeniería 2022?
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne">
          <div class="accordion-body">
            La Expo-ingeniería 2022 tendrá un <strong>modelo híbrido;</strong> el día lunes 16 de mayo, los proyectos serán exhibidos 100% presencial dentro del campus, con un horario de 9 a.m. hasta las 7 p.m.
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
  </div>
  <footer>
    <strong>Copyright @CETYS Lugar de Footer</strong>
  </footer>
</template>

<style scoped>
  #inicio{
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
  #lugar_logos{
    background:
      linear-gradient(
        rgba(255, 255, 255, 0.7),
        rgba(255, 255, 255, 0.7)
      ),
      url(../assets/e.jpg);

      background-attachment: fixed;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
  }
</style>
