<template>
  <div class="container-fluid">
    <div class="row  store">
      <Navbar></Navbar>

      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-12 m-auto pb-5 pt-2">
            <div class="box-store">
              <div class="row d-flex justify-content-between">
                <div class="col-4">
                  <div class="row">
                    <div class="col-6">
                      <img class="img" src="/img/Coin.svg" />
                    </div>
                    <div class="col-6 total">140</div>
                    <div class="col-12 text">Créditos</div>
                  </div>
                </div>

                <div class="col-4">
                  <div class="row">
                    <div class="col-6">
                      <img class="img" src="/img/Ico_diamante.svg" />
                    </div>
                    <div class="col-6 total">55</div>
                    <div class="col-12 text-left text">Diamantes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 d-none d-lg-flex">
            <b-tabs v-model="step" class="first">
              <b-tab active>
                <template #title>
                  <img src="/img/Coin.svg" />
                </template>
                <div class="col-12">
                  <p class="text-center pt-4 pb-4 txt-gray">METODO DE PAGO</p>
                  <div class="row">
                    <div class="col-8 m-auto text-center">
                      <div class="row">
                        <div class="col-4">
                          <div class="card mb-2">
                            <img class="img" src="/img/Brinks.svg" />
                          </div>
                          <p class="txt-gray">PayPal</p>
                        </div>
                        <div class="col-4">
                          <div class="card mb-2">
                            <img class="img" src="/img/Brinks.svg" />
                          </div>
                          <p class="txt-gray">Google Play</p>
                        </div>
                        <div class="col-4">
                          <div class="card mb-2">
                            <img class="img" src="/img/Brinks.svg" />
                          </div>
                          <p class="txt-gray">Brinks Cash Ecommerce</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <p class="text-center pt-4 pb-4 txt-gray">COMBOS</p>
                  <div class="row">
                    <div class="col-8 m-auto text-center">
                      <div class="row">
                        <div class="col-3">
                          <div id="pack-box" class="pach-box m-auto">
                            <div class="row">
                              <div class="col-12">
                                <div id="title-box" class="title-box">
                                  <p class="mb-0">Combo Uno</p>
                                </div>
                              </div>
                              <div class="col-12">
                                <p class="number">11</p>
                                <p class="text">créditos</p>
                              </div>
                              <div class="col-12">
                                <div id="price-box" class="price-box">
                                  <p>0,5 USD</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-3">
                          <div id="pack-box" class="pach-box m-auto">
                            <div class="row">
                              <div class="col-12">
                                <div id="title-box" class="title-box">
                                  <p class="mb-0">Combo Uno</p>
                                </div>
                              </div>
                              <div class="col-12">
                                <p class="number">11</p>
                                <p class="text">créditos</p>
                              </div>
                              <div class="col-12">
                                <div id="price-box" class="price-box">
                                  <p>0,5 USD</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-3">
                          <div id="pack-box" class="pach-box m-auto">
                            <div class="row">
                              <div class="col-12">
                                <div id="title-box" class="title-box">
                                  <p class="mb-0">Combo Uno</p>
                                </div>
                              </div>
                              <div class="col-12">
                                <p class="number">11</p>
                                <p class="text">créditos</p>
                              </div>
                              <div class="col-12">
                                <div id="price-box" class="price-box">
                                  <p>0,5 USD</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-3">
                          <div id="pack-box" class="pach-box m-auto">
                            <div class="row">
                              <div class="col-12">
                                <div id="title-box" class="title-box">
                                  <p class="mb-0">Combo Uno</p>
                                </div>
                              </div>
                              <div class="col-12">
                                <p class="number">11</p>
                                <p class="text">créditos</p>
                              </div>
                              <div class="col-12">
                                <div id="price-box" class="price-box">
                                  <p>0,5 USD</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 mt-5 mb-5">
                              <button class="bitn button-tap">Continuar</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12"></div>
              </b-tab>
              <b-tab>
                <template #title>
                  <img src="/img/Ico_diamante.svg" />
                </template>
                <div class="col-12">
                  rr
                </div>
                <div class="col-12"></div>
                <div class="col-12"></div>
              </b-tab>
              <b-tab>
                <template #title>
                  <img src="/img/Ico_trade_N.svg" />
                </template>
                <p class="p-3">Tab contents 1</p>
              </b-tab>
              <b-tab>
                <template #title>
                  <img class="premium" src="/img/Ico_premium.svg" />
                </template>
                <p class="p-3">Tab contents 1</p>
              </b-tab>
            </b-tabs>
          </div>

          <div class="col-12 mb-5">
            <hr />
          </div>
           <div class="col-12 mt-5">
<Footer></Footer>
       </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script></script>
<style>
button.bitn.button-tap {
    border: 0;
    background: #43dae6;
    color: white;
    padding: 10px;
    width: 30%;
    border-radius: 14px;
}
img.premium {
  width: 40px;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #495057;
  background-color: #fff;
  border-color: #ffffff #ffffff #05d3d5;
  border-bottom: solid 3px #05d3d5;
  width: 250px;
  text-align: center;
}
.nav-tabs .nav-link {
  border: 0px solid transparent;
  width: 250px;
  text-align: center;
}

.footer {
  bottom: 0;
}
.txt-gray {
  font-weight: 600;
  color: #777474;
}
.box-store {
  border: solid 1px #dad9d9;
  border-radius: 40px;
  text-align: center;
  padding: 10px 30px 10px 30px;
}
.box-store .img {
  width: 27px;
  position: absolute;
  right: 0;
}
.box-store .total {
  color: #606060;
  font-size: 23px;
  text-align: left;
  padding: 0px 3px 0px 3px;
}
.box-store .text {
  color: grey;
  font-size: 12px;
  padding: 0px 0px 0px 25px;
}
.first li.nav-item {
  position: relative;
  left: 50px;
}
.tabs.first {
  width: 100%;
}
.card img {
  width: 77px;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
}
.card {
  border-radius: 15px;
  cursor: pointer;
}
.card:hover {
  border-color: red;
}
.pach-box {
  box-shadow: 0px 0px 13px 0px #80808036;
  border-radius: 10px;
  width: 130px;
  padding: 10px;
  cursor: pointer;
}
#pack-box:hover {
  box-shadow: 0px 0px 13px 0px #8365ff;
}
:root {
  --gradient-color: 94, 186, 125;
}

.title-box {
  background: #dedede;
  height: 37px;
  position: relative;
  top: -10px;
  border-radius: 10px;
  width: 130px;
  left: -10px;

  padding-top: 7px;
  color: white;
  font-weight: 600;
}

.price-box {
  background: #cacaca;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  color: white;
  padding-top: 4px;
}
.pach-box p.number {
  font-size: 30px;
  margin-bottom: -6px;
  font-weight: 800;
  color: #6e6e6e;
  font-family: monospace;
}
.pach-box p.text {
  font-size: 14px;
  font-weight: 600;
  color: #6e6e6e;
}
</style>
