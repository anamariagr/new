<template>
  <div class="container-fluid">
    <div class="row">
      <Navbar></Navbar>
      <div class="col-12">
            <div class="row">
                    <div class="col-12 d-lg-none mobile">
        video y chat
      </div>
      <div class="col-lg-4 col-12 pr-2">
        <div class="row">
          <div class="col-12">
            <div class="panel">
                <div class="row">
              <div class="col-12">
                <div class="row border-bottom">
                  <div class="col-3">
                    <img src="img/Ico_chat.png" /><span class="font-number">55</span>
                  </div>
                  <div class="col-3 borde-left-right">
                      <img src="img/Ico_chat.png" /><span class="font-number">55</span>
                 
                  </div>
                  <div class="col-3 borde-right">
                      <img src="img/Ico_chat.png" /><span class="font-number">55</span>
                 
                  </div>
                  <div class="col-3">
                      <img src="img/Ico_chat.png" /><span class="font-number">55</span>
                 
                  </div>
                </div>
              </div>
              <div class="col-12  pt-2 pb-3">
                <div class="row">
                  <div class="col-1">
                   <img class="img-face" src="img/face.png" />
                  </div>
                  <div class="col-9 ml-5 text-left pt-1">
                    <p class="mb-0"><b>Maura Lizcano</b></p>
                    <p>Meditación para iniciar el día</p>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="row">
                  <div class="col-6">
                    <button class="btn btn-follow">seguir</button>
                  </div>
                  <div class="col-6">
                   <button class="btn btn-premium">crow</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div class="col-12 photograpys pt-3">
            <div class="row">
              <div class="col-12">
                <div class="img-photograpy">
                  <img class=" mt-0" src="img/img-prueba.jpg"/>
                </div>
              </div>
              <div class="col-12">
                <div class="img-photograpy">
                 <img src="img/img-prueba.jpg"/>
                </div>
              </div>
              <div class="col-6 pr-1">
                <div class="img-photograpy-media">
                 <img src="img/img-prueba.jpg"/>
                </div>
              </div>
              <div class="col-6 pl-1">
                <div class="img-photograpy-media">
                 <img src="img/img-prueba.jpg"/>
                </div>
              </div>
              <div class="col-12">
                <div class="img-photograpy">
                 <img src="img/woman-prueba.png"/>
                </div>
              </div>
              <div class="col-6 pr-1">
                <div class="img-photograpy-media">
                 <img src="img/img-prueba.jpg"/>
                </div>
              </div>
              <div class="col-6 pl-1">
                <div class="img-photograpy-media">
                 <img src="img/img-prueba.jpg"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 d-lg-none mobile">
        fotos
      </div>
      <div class="col-lg-4 d-none d-lg-block pl-0 pr-0">
        <img class="img-video" src="img/meditar.png"/>
      </div>
      <div class="col-lg-4 d-none d-lg-block pl-0 pr-0">
        <div class="chat">

        </div>
      </div>
            </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserCard",

  props: {
    user: Object
  },created: function () {
    console.log("aquii mano",this.user);
  },
};
</script>
<style>
.btn-follow{
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
.btn-premium{
    width: 100%;
    background: rgb(251,231,98);
background: linear-gradient(90deg, rgba(251,231,98,1) 18%, rgba(251,208,84,1) 52%, rgba(235,183,39,1) 85%);
        box-shadow: 0px 0px 11px 1px rgb(128 128 128 / 33%);
    margin-top: 4px;
    margin-bottom: 5px;
    color: #ffffff;
    font-weight: 500;
    border: 0;
    border-radius: 10px;
    padding: 10px;
}
.img-face {
    width: 60px;
    border-radius: 50%;
    height: 60px;
}
.font-number{
       font-size: 15px;
    font-weight: 500; 
}
    ul.navbar-nav.rigth {
    position: absolute!important;
    right: 0!important;
    top: 3px;
}
</style>
<style scoped> 
.border-bottom img {
    width: 15px;
    margin-right: 10px;
    margin-bottom: 5px;
}
.borde-left-right{
        border-left: solid 2px #d6d6d6;
    
}


.borde-right{
        border-left: solid 2px #d6d6d6;
    border-right: solid 2px #d6d6d6;
}
.border-bottom{
   border-bottom: solid 2px #d6d6d6!important;
    padding-bottom: 8px;
    height: 37px;
    margin-bottom: 10px;
}
.panel{
        margin: 10px;
    background: white;
    padding: 20px;
    text-align: center;
    padding-top: 0;
    margin-top: 0;
    padding-bottom: 0;
}
.photograpys{
   
        width: 100%;
    padding-top: 0;
    background-color: #fff;
    border-radius: 0.25rem;
    color: #333;
    font-family: sans-serif;
    text-align: justify;
    line-height: 1.3;
            height: 614px;
    overflow: overlay;
    padding: 27px;
    margin: -9px;
    padding-bottom: 2px;
    padding-right: 10px;
    
}
.photograpys::-webkit-scrollbar {
  width: 8px;
}
.photograpys::-webkit-scrollbar-thumb {
  background: #ffffff38;
  border-radius: 4px;
}
.photograpys::-webkit-scrollbar-thumb:active {
  background-color: #00c5e038;
}
.photograpys::-webkit-scrollbar-thumb:hover {
  background: #00c5e038;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}
.photograpys::-webkit-scrollbar-track {
  background: #ffff;
  border-radius: 4px;
}
.photograpys::-webkit-scrollbar-track:hover, 
.photograpys::-webkit-scrollbar-track:active {
  background: #ffff;
}

.navbar-nav{
position: absolute!important;
    right: 0!important;
    top: 3px;
}

.chat{
        background: #343434;
    width: 100%;
   height: 791px;
}
.img-video{
  width: 100%;  
      height: 791px;
}

.img-photograpy img {
    width: 100%;
        margin-top: 10px;
            border-radius: 25px;
}
.img-photograpy-media img {
    width: 100%;
    margin-top: 10px;
    border-radius: 25px;
    height: 175px;
    padding: 3px;
}


</style>
