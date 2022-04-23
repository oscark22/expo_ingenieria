<template>
  <div class="container-fluid" id="contenedor-1">
    <div id="logo" align="center">
    <img src="../assets/logo_cetys.png" alt id="logo-expo">
    </div>
  </div>
  <div id="contenedor-2">
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/a.jpg" class="d-block w-100" alt="a">
      </div>
      <div class="carousel-item">
        <img src="@/assets/b.jpg" class="d-block w-100" alt="b">
      </div>
      <div class="carousel-item">
        <img src="@/assets/c.jpg" class="d-block w-100" alt="c">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="container">
  <div class="container mt-5">
    <div class="row flex-lg-row-reverse p-4 gx-5 align-items-center rounded border shadow">
      <div class="col"> <!-- Do dynamic right-align -->
        <img src="@/assets/d.jpg" class="img-fluid" width="620" alt="logo">
      </div>
      <div class="col col-lg-6">
        <h2 class="fw-light">
          ¿Qué es la Expo Ingeniería?
        </h2>
        <p class="lead text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nesciunt. Corporis facilis blanditiis modi ratione libero adipisci, ipsam id nostrum quidem aliquid at recusandae delectus eius! Quo voluptatum commodi vero. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor neque asperiores fugiat provident! Nam praesentium delectus maxime animi voluptate debitis. Omnis tempore, quis fuga itaque nam debitis quia vitae optio!
        </p>
      </div>
    </div>
  </div>
    <div class="container mt-4">
    <div class="row p-4 gx-5 align-items-center rounded border shadow">
      <div class="col"> <!-- Do dynamic right-align -->
        <img src="@/assets/e.jpg" class="img-fluid" width="620" alt="logo">
      </div>
      <div class="col col-lg-6">
        <h2 class="fw-light">
          ¿Una pregunta random?
        </h2>
        <p class="lead text-muted">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, dolorum, cupiditate a magni soluta unde reiciendis dolore optio facilis animi fuga nisi asperiores exercitationem quasi enim minima voluptatem suscipit necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptas neque tempora laudantium inventore. Odit tempore corporis quasi porro. Nisi delectus exercitationem quia excepturi fugit ipsa unde voluptate culpa repellat.
        </p>
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
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
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<style scoped>
  .backround {
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
