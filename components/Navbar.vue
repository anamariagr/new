<template>
  <div class="container-fluid p-0" id="my-collapse">
    <div class="opacity" id="opacity" @click="closeSibar()"></div>
    <div v-if="modal" class="cont-filter" id="filter">
      <div class="arrow-filter"></div>
      <div class="row pl-4 pr-2 pt-4 pb-4">
        <div class="col-12">
          <b-row align-h="between" class="border-filter">
            <b-col cols="6" class="text-bold pl-0"><b>Filtro</b></b-col>
            <b-col cols="6" class="text-right pb-2 pr-0 col-6"
              ><button class="btn-restore">Restaurar</button></b-col
            >
          </b-row>
        </div>

        <div class="col-12">
          <b-row align-h="between" >
            <b-col cols="6" class="text-bold">Localización</b-col>
            <b-col cols="5" class="text-right pr-4 mr-2">
              <p class="mb-0 text-bold">Ubicación actual</p>
              <p class="text-italy">Bogotá, Colombia</p>
            </b-col>
          </b-row>
        </div>
        <div class="col-12">
          <b-row align-h="between">
            <b-col class="text-bold" cols="4">Cerca de mi</b-col>
            <b-col cols="3 mr-2" class="text-italy">{{ sliderValue }}km</b-col>
          </b-row>
        </div>
        <div class="col-12">
          <div class="app-content">
            <range-slider
              class="slider"
              min="10"
              max="1000"
              step="10"
              v-model="sliderValue"
            >
            </range-slider>
          </div>
        </div>
         <div class="col-12 pr-4">
          <p class="text-bold">Quiero ver</p>
          <div class="row">
            <div class="col-4  pr-1">
              <b-button variant="outline-primary col-12">Hombre</b-button>
            </div>
            <div class="col-4 pl-2 pr-1">
              <b-button variant="outline-danger col-12">Mujer</b-button>
            </div>
            <div class="col-4 pl-2 ">
              <b-dropdown
                id="dropdown-1"
                text="Otro"
                class="pl-0  col-12 pr-2 other-btn"
              >
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
                <b-dropdown-item>Third Action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item active>Active action</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </div>
        <div class="col-12 pt-3 pl-3">
          <b-row align-h="between">
            <b-col class="text-bold" cols="5">Rango de edad</b-col>
            <b-col cols="3 mr-2" class="text-italy"
              >{{ range[0] }}- {{ range[1] }}</b-col
            >
          </b-row>
        </div>
        <div class="col-12">
          <div class="app-content">
            <VueSimpleRangeSlider
              style="width: 335px"
              :min="18"
              :max="100"
              :logarithmic="true"
              activeBarColor="#05d3d5"
              v-model="range"
            />
          </div>
        </div>
        <div class="col-12 text-center">
          <button class="btn btn-appication">Aplicar</button>
        </div>
       
      </div>
      <!--
        <button @click="modalAction()">
                      close
                     </button>
      -->
    </div>
    <div class="cont-sibar active" id="sibar">
      <div class="cont-icon p-3">
        <b-button @click="closeSibar()">
          <img src="../static/img/Menú.png" />
        </b-button>
        <NuxtLink to="/">  
         <img
          class="icon-social-sibar"
          src="../static/img/SocialTime_Logo.png"
        />
          </NuxtLink>
        
      </div>
      <ul>
        <li class="mt-0">
          
          <NuxtLink to="/stream">
          <div class="icon">
              <img src="../static/img/Ico_home.png" />
            </div>
          </NuxtLink>
            
            <div class="text">
              <p class="mb-0">home</p>
            </div>
         
        </li>

        <li>
          <a class="d-flex">
            <div class="icon">
              <img src="../static/img/Ico_agenda.png" />
            </div>
            <div class="text">
              <p class="mb-0">agenda</p>
            </div>
          </a>
        </li>
        <li>
          <a class="d-flex">
            <div class="icon">
              <img src="../static/img/Ico_verificar.png" />
            </div>
            <div class="text">
              <p class="mb-0">verificar cuenta</p>
            </div>
          </a>
        </li>
        <li>
          <a class="d-flex">
            <div class="icon">
              <img src="../static/img/Ico_bloq_usu.png" />
            </div>
            <div class="text">
              <p class="mb-0">usuarios bloqueados</p>
            </div>
          </a>
        </li>
        <li>
          <a class="d-flex">
            <div class="icon">
              <img src="../static/img/Ico_cuenta.png" />
            </div>
            <div class="text">
              <p class="mb-0">cuenta de cobro</p>
            </div>
          </a>
        </li>
        <li>
          <a class="d-flex">
            <div class="icon">
              <img src="../static/img/Ico_contacto.png" />
            </div>
            <div class="text">
              <p class="mb-0">Contáctenos</p>
            </div>
          </a>
        </li>
        <li>
          <a class="d-flex">
            <div class="icon">
              <img src="../static/img/Ico_term&cond.png" />
            </div>
            <div class="text">
              <p class="mb-0">Términos y condiciones</p>
            </div>
          </a>
        </li>
        <li>
          <a class="d-flex">
            <div class="icon">
              <img src="../static/img/Ico_politic.png" />
            </div>
            <div class="text">
              <p class="mb-0">Políticas de privacidad</p>
            </div>
          </a>
        </li>
        <li>
          <a class="d-flex">
            <div class="icon">
              <img src="../static/img/Ico_preguntas_f.png" />
            </div>
            <div class="text">
              <p class="mb-0">preguntas frecuentes</p>
            </div>
          </a>
        </li>
        <li>
          <a class="d-flex">
            <div class="icon">
              <img src="../static/img/Negocios.png" />
            </div>
            <div class="text">
              <p class="mb-0">negocios</p>
            </div>
          </a>
        </li>

        <button class="btn-sibar">
          Cerrar sesion
          <span class="pl-2"
            ><img src="../static/img/Ico_cerrar_ses.png"
          /></span>
        </button>
      </ul>
    </div>

    <b-navbar toggleable="lg" variant="ligth" class="pt-0">
      <b-button @click="openSibar()" class="btn-color" id="icon-menu">
        <img src="../static/img/Menú.png" />
      </b-button>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="left mt-0 pt-0">
          <b-nav-item href="/" class="pt-2 pr-2">
            <img src="../static/img/SocialTime_Logo.png" />
          </b-nav-item>
          <b-nav-item href="#" class="ml-3">
            <div>
              <img class="icon-nav" src="../static/img/Ico_lives_act.png" />
            </div>
            <div>
              <p class="title-icon">Lives</p>
            </div>
          </b-nav-item>
          <b-nav-item href="#" class="ml-3">
            <div>
              <img class="icon-nav" src="../static/img/Ico_amigos.png" />
            </div>
            <div>
              <p class="title-icon">Amigos</p>
            </div>
          </b-nav-item>
          <b-nav-item href="#" class="ml-3">
            <div>
              <img class="icon-nav" src="../static/img/Ico_chat.png" />
            </div>
            <div>
              <p class="title-icon">Chat</p>
            </div>
          </b-nav-item>
          <b-nav-item href="#" class="ml-3">
            <div>
              <img class="icon-nav" src="../static/img/Ico_tienda.png" />
            </div>
            <div>
              <p class="title-icon">Tienda</p>
            </div>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->

        <b-navbar-nav class="rigth">
          <b-nav-item href="#">
            <div>
              <b-row class="my-1">
                <b-col sm="12" class="pr-5">
                  <div class="row input input-search">
                    <div class="col-2  mr-3">
                      <button class="btn search" @click="search()">
                        <img src="../static/img/Ico_buscar.png" />
                      </button>
                    </div>
                    <div class="col-6 pt-1 pl-2  text-input">
                      <input type="text" placeholder="Buscar.." />
                    </div>

                    <div class="col-1 pr-3">
                      <button @click="modalAction()" class="btn filter">
                        <img src="../static/img/Ico_filtros.png" />
                      </button>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-nav-item>

          <b-nav-item href="#">
            <div class="row" style=" position: relative; top: -5px; left: -14px;">    
                <div class="col-4">
                      <img src="../static/img/Ico_stream.png"/>
                </div>
                <div class="col-3 pt-1">
                    <img src="../static/img/ico_notificacion.png" />
                </div>
                <div class="col-4">
                    <img src="../static/img/img_perfil.png" />
                </div>
            </div>
            </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template> 

<script>
import VueSimpleRangeSlider from "vue-simple-range-slider";
import "vue-simple-range-slider/dist/vueSimpleRangeSlider.css";
import RangeSlider from "vue-range-slider";
// you probably need to import built-in style
import "vue-range-slider/dist/vue-range-slider.css";

export default {
  name: "Navbar",
  data() {
    return {
      modal: false,

      range: [18, 80],
     
      sliderValue: 100
    };
  },
  created() {
    
  },
  methods: {
    openSibar() {
      (document.getElementById("sibar").style.display = "block"),
        (document.getElementById("opacity").style.display = "block");
    },
    rangeInput() {
      const range = (document.getElementById(
        "rangeInput"
      ).oninput = function() {
        const value = ((this.value - this.min) / (this.max - this.min)) * 100;
        this.style.background =
          "linear-gradient(to right, #05d3d5 0%, #05d3d5 " +
          value +
          "%,#c3c3c3 " +
          value +
          "%, #c3c3c3 100%)";
        console.log("aqui sie ts rangeInput", value);
      });
    },
    closeSibar() {
      (document.getElementById("sibar").style.display = "none"),
        (document.getElementById("opacity").style.display = "none");
    },
    modalAction() {
      if (this.modal == false) {
        this.modal = true;
      } else {
        this.modal = false;
      }
    },

    search() {
      console.log("AQUII SEARCH");
    }
  },
  components: { VueSimpleRangeSlider, RangeSlider },
  mounted() {}
};
</script>
<style>
.btn-appication{
    background-color: #43dae6!important;
    border-radius: 12px;
    padding-right: 35px;
    width: 168px;
    text-align: center;
    color: white !important;
    border: 0px;
    padding: 9px;
    font-size: 11px;
    box-shadow: 0px 0px 6px 1px #8080804d;
        margin-top: 7px;
}
.border-filter{
  border-bottom: solid #c3c3c3 2px;
    margin: 0px 15px 0px 1px;
    margin-bottom: 15px;
}
button.btn.btn-outline-primary {
    color: #7c7c7c;
    padding: 6px 10px 6px 10px;
    font-size: 13px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 1px #a9a5a561;
    border: #00c5e0 solid 1px;
}
button.btn.btn-outline-primary:hover {
    background: #00c5e0;
    border: #00c5e0;
    color: white!important;
}
.btn-outline-danger:hover {
    color: #fff!important;
    background-color: #ff637b;
    border-color: #dc3545;
}
button.btn.btn-outline-danger {
    border-color: #ff637b;
    color: #7c7c7c;
    padding: 6px 10px 6px 10px;
    font-size: 13px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 1px #a9a5a561;
}
.other-btn > .btn-secondary {
  background: white !important;
  color: #7c7c7c !important;
  border: solid #9fe237 1px;
  border-radius: 11px;
   box-shadow: 0px 0px 5px 1px #a9a5a561;
  font-size: 12px;
  padding: 7px 10px;
}
.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
    color: #fff!important;
    background-color: #9fe237!important;
    border-color: #8ccc38!important;
}
.btn-secondary:not(:disabled):not(.disabled):hover {
background-color: #9fe237!important;
color: #fff!important;
}


.dropdown-item.active, .dropdown-item:active {
    color: #fff;
    text-decoration: none;
    background-color: #05d3d5;
}

.cont-filter {
  font-size: 14px;
  color: #949494;
}
.simple-range-slider-anchor {
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  box-sizing: border-box;
  height: 20px !important;
  width: 20px !important;
  border: 1px solid #f5f5f5;
  border-radius: 50% !important;
  background-color: #fff;
  box-shadow: 0 0 4px 3px rgb(148 148 148 / 9%) !important;
  transform: translate(-50%, -50%);
  cursor: pointer;
  position: absolute;
  top: -6.5px;
}
.range-slider-rail,
.simple-range-slider .simple-range-slider-bg-bar {
  background: #c3c3c3 !important;
  box-shadow: 0px 0px 4px 2px #b5b5b540 !important;
}
.range-slider-knob {
  box-shadow: 0 0 4px 3px rgb(148 148 148 / 9%) !important;
}
.range-slider {
  width: 100%;
    margin-left: -8px;
}
.range-slider-fill {
  background-color: #05d3d5;
}
.simple-range-slider-popover.simple-range-slider-popover-left {
  display: none !important;
}
.simple-range-slider-popover-arrow {
  display: none !important;
}
.simple-range-slider-popover {
  display: none !important;
}
.simple-range-slider .simple-range-slider-bg-bar[data-v-06329002] {
  margin: 12px 10px 12px 10px;
}
</style>
<style scoped>
.text-bold {
  color: #4a4a4a;
  font-weight: 500;
}
.text-italy {
  font-style: italic;
}
button.btn-restore {
  background: #ff637b;
  border: 0;
  padding: 4px 14px 4px 14px;
  color: white;
  border-radius: 11px;
  margin: 0px 0px 10px 4px;
  font-size: 13px;
  box-shadow: #80808059 0px 0px 5px 1px;
}

.vue-range-slider.slider-component
  .slider
  .slider-dot.slider-always
  .slider-tooltip-wrap {
  display: none !important;
}

.app-content {
  padding: 10px 0px 10px 0px;
}
.vue-range-slider.slider-component .slider .slider-process {
  background-color: #00c5e0;
}

.slide {
  width: 100%;
}
.arrow-filter {
  width: 24px;
  height: 24px;
  border: 7px solid rgba(255, 255, 255, 0);
  border-top: 7px solid;
  border-right: 7px solid;
  margin: 15px;
  right: 3px;
  position: absolute;
  transform: rotate(-44deg);
  color: white;
  top: -26px;
  background: white;
  box-shadow: 5px -4px 10px 0px rgb(128 128 128 / 21%);
}
.input-search {
  position: relative;
  top: -6px;
}
.cont-off {
  display: none;
}
.cont-filter {
  background: white;
  width: 377px;
  position: absolute;
  right: 180px;
  top: 80px;
  z-index: 2;
  border-radius: 14px;
  box-shadow: 0 0 8px 0px rgb(128 128 128 / 53%);
}
.cont-on {
  display: block;
}
button.btn.filter:active {
  filter: brightness(0.5);
}
button.btn.filter:hover {
  filter: brightness(0.5);
}
button.btn.search:active {
  filter: brightness(0.5);
}
button.btn.search:hover {
  filter: brightness(0.5);
}
.btn:focus,
.btn.focus {
  outline: 0;
  box-shadow: none;
}
/*sibar*/
.icon-social-sibar {
  padding-left: 5px;
  padding-top: 5px;
}
.cont-sibar {
  background: white;
  width: 237px;
  position: fixed;
  z-index: 1;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 100vh;
}
.cont-sibar ul {
  text-decoration: none;
  list-style: none;
  padding-left: 0;
}
.cont-sibar li {
  padding: 5px 0px 5px 35px;
  cursor: pointer;
  margin-top: 10px;
}
.cont-sibar li a {
  text-decoration: none;
  color: #050457;
}
.cont-sibar li .icon {
  width: 20px;
}
.cont-sibar li:hover {
  background: rgb(5, 213, 216);
  background: linear-gradient(
    90deg,
    rgba(5, 213, 216, 1) 4%,
    rgba(255, 255, 255, 1) 4%,
    rgba(255, 255, 255, 1) 9%,
    rgba(202, 246, 247, 1) 6%,
    rgba(202, 246, 247, 1) 77%
  );
  padding-left: 30px;
  border-top-right-radius: 35px;
  border-bottom-right-radius: 35px;
  width: 95%;
  padding: 5px 0px 5px 35px;
}
.cont-sibar .text p {
  padding-left: 15px;
  font-weight: 500;
  text-transform: capitalize;
  font-size: 13px;
}
.cont-icon button.btn.btn-secondary {
  background: white;
  border: white;
}

.active {
  display: none;
}
.opacity {
  background-color: rgb(0 0 0 / 51%);
  display: none;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1;
}
.cont-sibar button.btn-sibar {
  border: 0;
  padding: 8px;
  border-radius: 100px;
  width: 173px;
  color: white;
  background: #3dd3e7;
  margin-top: 20px;
  margin-left: 37px;
  font-size: 14px;
}
.cont-sibar button.btn-sibar:hover {
  background: #39c7da;
}
/*end sibar*/

.btn-color {
  background-color: white;
  border-color: white;
}
.bg-info {
  background-color: white;
}
ul.navbar-nav.left {
  margin-left: 0;
}
ul.navbar-nav.rigth {
  margin-right: 0;
}
button.btn.filter {
    position: relative;
    left: 18px;
}
nav.navbar.navbar-light.bg-ligth.navbar-expand-lg {
  box-shadow: 0px 1px 10px 0px #80808036;
  border-radius: 8px;
  padding-bottom: 0;
  margin-bottom: 10px;
  height: 66px;
}
p.title-icon {
  font-size: 10px;
  margin-bottom: 0;
  text-align: center;
}
.input {
  border-radius: 20px;
  padding: 5px;
  padding-right: 0;
  padding-left: 0;
  margin-top: 0;
  box-shadow: 0px 0px 6px 1px #80808038;
}
input {
  overflow: visible;
  border: none;
  width: 100px;
}
input[type="text"]:focus {
  outline: -webkit-focus-ring-color auto 0px;
}
.input img {
  width: 19px;
}
.text-input {
  border-left: solid 1px #e2dcdc;
}
</style>
