<template>
  <div class="container-fluid p-0" id="my-collapse">
    <div class="opacity" id="opacity" @click="closeSibar()"></div>
    <div class="cont-filter" id="filter"></div>
    <div class="cont-sibar active" id="sibar">
      <div class="cont-icon p-3">
        <b-button @click="closeSibar()">
          <img src="../static/img/Menú.png" />
        </b-button>
        <img class="icon-social-sibar" src="../static/img/SocialTime_Logo.png" />
      </div>
      <ul>
        <li class="mt-0">
          <a class="d-flex">
            <div class="icon">
              <img src="../static/img/Ico_home.png" />
            </div>
            <div class="text">
              <p class="mb-0">home</p> 
            </div>
          </a>
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
        
          <button class="btn-sibar">Cerrar sesion <span class="pl-2"><img src="../static/img/Ico_cerrar_ses.png" /></span></button>
        
        
        
        
      </ul>
    </div>

    <b-navbar toggleable="lg" variant="ligth" class="pt-0">
      <b-button @click="openSibar()" class="btn-color" id="icon-menu">
        <img src="../static/img/Menú.png" />
      </b-button>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="left mt-0 pt-0">
          <b-nav-item href="#" class="pt-2 pr-2">
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
                  <div class="row input">
                    <div class="col-2  mr-3">
                      <button class="btn search"  @click="search()"><img src="../static/img/Ico_buscar.png" /></button>
                    </div>
                    <div class="col-7 pt-2  text-input">
                      <input type="text" placeholder="Buscar.." />
                    </div>
                    <div class="col-1 pr-3">
                     <button class="btn filter" @click="filter()" >
                        <img src="../static/img/Ico_filtros.png" />
                     </button>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-nav-item>

          <b-nav-item href="#"
            ><img src="../static/img/Ico_stream.png"
          /></b-nav-item>
          <b-nav-item class="pt-2" href="#"
            ><img src="../static/img/ico_notificacion.png"
          /></b-nav-item>
          <b-nav-item href="#"
            ><img src="../static/img/img_perfil.png"
          /></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {
    
    openSibar() {
      (document.getElementById("sibar").style.display = "block"),
        (document.getElementById("opacity").style.display = "block");
    },
    closeSibar() {
      (document.getElementById("sibar").style.display = "none"),
      
        (document.getElementById("opacity").style.display = "none");
    },
    filter(){ 
     
      
    const open = document.getElementById("filter")
     open.classList.add("cont-on");

     
        
    },
    
    search(){
      console.log('AQUII SEARCH')
    },
  }
};
</script>
<style scoped>
.cont-none{
  display: none;
}
.cont-filter {
    background: red;
    width: 310px;
    height: 360px;
    position: absolute;
    right: 185px;
    top: 94px;
    z-index: 2;
    border-radius: 14px;
    display: none;
}
.cont-on{
  display: block;
}
button.btn.filter:active {
    filter: brightness(0.5);
}button.btn.filter:hover {
    filter: brightness(0.5);
}
button.btn.search:active {
    filter: brightness(0.5);
}button.btn.search:hover {
    filter: brightness(0.5);
}
.btn:focus, .btn.focus {
    outline: 0;
       box-shadow: none;
}
/*sibar*/
.icon-social-sibar{
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
.cont-sibar li{
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
    background: rgb(5,213,216);
    background: linear-gradient(
90deg
, rgba(5,213,216,1) 4%, rgba(255,255,255,1) 4%, rgba(255,255,255,1) 9%, rgba(202,246,247,1) 6%, rgba(202,246,247,1) 77%);
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
.cont-sibar button.btn-sibar:hover{
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
nav.navbar.navbar-light.bg-ligth.navbar-expand-lg {
  box-shadow: 0px 1px 10px 0px #80808036;
  border-radius: 8px;
  padding-bottom: 0;
  margin-bottom: 10px;
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
