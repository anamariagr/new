<template>
  <div class="container-fluid">
    <div class="row">
      <Navbar></Navbar>
      <div class="col-12 pl-5 pr-5 pt-3">
        <div class="row d-flex justify-content-between">
          <div class="col-4 text-center agendar">
            <p class="text">
              <span><img src="/img/Ico_agenda.svg"/></span>Agenda
            </p>
          </div>
          <div class="col-4">
            <div class="row drop-items">
              <div class="col-6">
                <p>Todas las fechas</p>
              </div>
              <div class="col-6">
                <p>Todos los streams</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div class="col-12 pl-5 pr-5">
        <div class="row d-flex justify-content-between  drop-items">
          <div class="col-6 text-center ">
            <p class="mb-0">Todos</p>
          </div>
          <div class="col-6 text-center">
            <p class="mb-0">Creados por mi</p>
          </div>
        </div>
      </div>
      <hr />
      <div class="col-12 pl-5 pr-5">
        <hr />
        <div class="container">
          <div class="row">
            <div class="col-12  drop-items">
              <p class="mb-0 text-center">
                Hoy
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-7 crad-item-calendar">
            <div class="row">
              <div class="col-lg-8 col-12 p-3 text-center">
                <div class="row">
                  <div class="col-12"><p>Azul Live (Performance)</p></div>
                  <div class="col-12">
                    <div class="row">
                      <div class="col-6">
                          <p class="text-left">Streamer:</p>
                          <p class="text-left">Fecha:</p>
                          <p class="text-left">Duración:</p>
                      </div>
                      <div class="col-6">
                          <p class="text-right">J Balvin</p>
                          <p class="text-right">Abril 15     04:00pm</p>
                          <p class="text-right">30 Minutos</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                      <div class="row">
                      <div class="col-12"><p>Estado del evento</p></div>
                      <div class="col-12">
                          <div class="row">
                              <div class="col-6">
                                  <p>En espera</p>
                              </div>
                              <div class="col-6">
                                  <button class="btn btn-primary">Iniciar</button>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <img class="streamer-img" src="/img/eat.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
   <Footer></Footer>
    </div>
   </div>
</template>
<style scoped>
.agendar p.text {
  font-size: 18px;
  font-weight: 700;
}
.agendar img {
  margin-right: 10px;
}

.drop-items p {
  font-size: 15px;
  color: gray;
  font-weight: 600;
}
.crad-item-calendar {
  width: 500px;
  height: 100%;
  margin: auto;
  margin-top: 25px;
  margin-bottom: 25px;
  border: solid 1px rgb(211, 210, 210);
  border-radius: 13px;
}
.streamer-img {
  width: 200px;
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: 20%;
    border-bottom-right-radius: 11px;
    border-top-right-radius: 11px;
}
.footer {
    bottom: 0;
    border-top: solid 1px #e7e7e7;
}
</style>
