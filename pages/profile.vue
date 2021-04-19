<template>
  <div class="container-fluid p-0">
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="Photo-profile">
            <div class="user-info pl-4 pr-5">
              <div class="row justify-content-between">
                <div class="col-4">
                  <p class="name">Abigaíl Fuentes<span><img src="/img/Ico_premium.svg"/></span></p>
                  <p class="city">Bogotá, Colombia</p>
                 <div class="d-flex">
                     <div class="circle-color mr-2"></div>
                      <p class="state">conectada</p>
                  
                 </div>
                </div>
                <div class="col-4 text-right">
                  <p class="age"><span>29</span>Años</p>
                  <p class="distance">13km</p>
                  <p class="check"><img src="/img/Ico_verificado.svg"/></p>
                </div>
              </div>
            </div>
            <div>
              <b-carousel
                id="carousel-no-animation"
                style="text-shadow: 0px 0px 2px #000"
                no-animation
                indicators
                img-width="1024"
                img-height="480"
              >
                <b-carousel-slide
                  class="img"
                  img-src="https://picsum.photos/1024/480/?image=10"
                ></b-carousel-slide>
                <b-carousel-slide
                  img-src="https://picsum.photos/1024/480/?image=12"
                ></b-carousel-slide>
                <b-carousel-slide
                  class="img"
                  img-src="https://picsum.photos/1024/480/?image=22"
                ></b-carousel-slide>
                <b-carousel-slide
                  class="img"
                  img-src="https://picsum.photos/1024/480/?image=23"
                ></b-carousel-slide>
              </b-carousel>
            </div>
          </div>
        </div>
        <div class="col-12 pl-4 pr-4 pt-2">
          <div class="row justify-content-between">
            <div class="col-4">
              <div class="row">
                <div class="3">
                  <button class="btn btn-gifts">
                      <img src="/img/Ico_img.svg"/>
                  </button>
                </div>
                <div class="3">
                  <button class="btn btn-gifts">
                      <img src="/img/Ico_stream.svg"/>
                  </button>
                </div>
                <div class="3">
                  <button class="btn btn-gifts">
                      <img src="/img/Ico_gif.svg"/>
                  </button>
                </div>
                <div class="3">
                  <button class="btn btn-gifts pb-3">
                      <img src="/img/Ico_opc.svg"/>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="row btn-gifts">
                <div class="col-6">
                  <button class="btn btn-follow">seguir</button>
                </div>
                <div class="col-6">
                  <button class="btn btn-premium">
                      <img src="/img/Premium_ico.svg"/>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-12 pt-3">
              <div class="row border-bottom">
                <div class="col-3">
                  <div class="items-info">
                    <img
                      class="icon-stremer"
                      src="/img/Ico_diamantes.svg"
                    /><span class="icon-strem">123</span>
                  </div>
                </div>
                <div class="col-3 borde-left-right">
                  <div class="items-info">
                    <img class="icon-stremer" src="/img/Ico_fav.svg" /><span
                      class="font-number"
                      >5677</span
                    >
                  </div>
                </div>
                <div class="col-3 borde-right">
                  <div class="items-info">
                    <img
                      class="icon-stremer"
                      src="/img/Ico_seguidores.svg"
                    /><span class="font-number">455</span>
                  </div>
                </div>
                <div class="col-3">
                  <div class="items-info">
                    <img class="icon-stremer" src="/img/Ico_vistas.svg" /><span
                      class="font-number"
                      >4353</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <p>
            Amante de los animales, de carácter tranquilo, humanista, crítica y
            reflexiva, me gusta ayudar en grupos sociales y comunidades
            relacionadas con los animales… Más info
          </p>
        </div>
        <div class="col-12">
          Photographyes
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
  
</template>
<script></script>
<style>
img.icon-stremer {
    width: 30%;
}
ul.navbar-nav.rigth {
    position: absolute!important;
    right: 0!important;
    top: 3px;
}
.circle-color{
height: 10px;
    width: 10px;
    background-color: #a9ef4c;
    border-radius: 10px;
    margin-top: 7px;
    border: solid white 1px;
}
</style>
<style scoped>
.user-info {
  position: absolute;
  z-index: 2;
  bottom: 58px;
  width: 97%;
  color: white;
}
.user-info p {
  line-height: 21px;
}
.user-info p.name {
  font-size: 25px;
}
.user-info p.city {
  font-size: 16px;
}
.Photo-profile.img-fluid {
  max-width: 100%;
  height: auto;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.img .img-fluid {
  border-radius: 21px;
}
.btn-follow {
  width: 100%;
  background: white;
  box-shadow: 0px 0px 11px 1px #80808054;
  margin-top: 4px;
  margin-bottom: 5px;
  color: #3fd3e7;
  font-weight: 500;
  font-weight: 500;
  border: 0;
  border-radius: 10px;
  padding: 10px;
}
.btn-premium {
  width: 100%;
  background: rgb(251, 231, 98);
  background: linear-gradient(
    90deg,
    rgba(251, 231, 98, 1) 18%,
    rgba(251, 208, 84, 1) 52%,
    rgba(235, 183, 39, 1) 85%
  );
  box-shadow: 0px 0px 11px 1px rgb(128 128 128 / 33%);
  margin-top: 4px;
  margin-bottom: 5px;
  color: #ffffff;
  font-weight: 500;
  border: 0;
  border-radius: 10px;
  padding: 10px;
}
button.btn-gifts {
  border: solid 1px #80808040;
  margin-left: 10px;
  border-radius: 15px;
}
.border-bottom {
  border-bottom: solid 2px #d6d6d6 !important;
  padding-bottom: 8px;
  height: 37px;
  margin-bottom: 10px;
}
.borde-left-right {
  border-left: solid 2px #d6d6d6;
}

.borde-right {
  border-left: solid 2px #d6d6d6;
  border-right: solid 2px #d6d6d6;
}
.items-info {
  width: 100px;
  margin: auto;
  text-align: center;
  cursor: pointer;
}
img.icon-stremer {
    padding-bottom: 6px;
    padding-right: 6px;
}

</style>
