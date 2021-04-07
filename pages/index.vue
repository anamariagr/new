<template>
  <div class="container-fluid">
    <div class="row">
      <Navbar></Navbar>
      <div class="col-12">
        <div class="container">
          <div class="row">
            <v-tabs v-model="tabGenral">
              <v-tab v-for="tap in taps" :key="tap" grow> </v-tab>
            </v-tabs> 
            <!-- tap ahora start  -->
            <b-tabs>
              <b-tab title="Ahora" active :title-link-class="linkClass(0)">
                <div class="pt-3 col-12">
                  <!-- top 10 strat-->
                  <section class="live">
                    <p class="pt-3">
                      <b>{{ taps[0] }}</b>
                    </p>
                    <div class="row pl-4 pr-4">
                      <UserCard
                        class=""
                        :user="item"
                        v-for="(item, id) in users.top"
                        :key="id"
                      >
                      </UserCard>
                    </div>
                    <div class="showMore mt-2">
                      Ver más
                    </div>
                    <hr class="mt-2" />
                  </section>
                  <!-- top 10 end-->
                  <!-- famosos strat-->
                  <section>
                    <p class="pt-3">
                      <b>{{ taps[1] }}</b>
                    </p>
                    <div class="row pl-4 pr-4">
                      <UserCard
                        class=""
                        :user="item"
                        v-for="(item, id) in users.populars"
                        :key="id"
                      >
                      </UserCard>
                    </div>
                    <div class="showMore mt-2">
                      Ver más
                    </div>

                    <hr class="mt-2" />
                  </section>
                  <!-- famosos end-->
                  <!-- ultimos creados strat-->
                  <section>
                    <p class="pt-3">
                      <b>{{ taps[2] }}</b>
                    </p>
                    <div class="row pl-4 pr-4">
                      <UserCard
                        class=""
                        :user="item"
                        v-for="(item, id) in users.latest"
                        :key="id"
                      >
                      </UserCard>
                    </div>
                    <div class="showMore mt-2">
                      Ver más
                    </div>

                    <hr class="mt-2" />
                  </section>
                  <!-- ultimos creados end-->

                  <!-- ceraca de ti strat-->
                  <section>
                    <p class="pt-3">
                      <b>{{ taps[3] }}</b>
                    </p>
                    <div class="row pl-4 pr-4">
                      <UserCard
                        id="near"
                        class="near mr-4"
                        :user="item"
                        v-for="(item, id) in users.near"
                        :key="id"
                      >
                      </UserCard>
                    </div>
                    <div class="showMore mt-2">
                      Ver más
                    </div>

                    <hr class="mt-2" />
                  </section>
                  <!-- cerca de ti end-->
                  <!-- eventos strat-->
                  <section>
                    <p class="pt-3">
                      <b>{{ taps[5] }}</b>
                    </p>
                    <div class="row pl-4 pr-4">
                      <UserCard
                        class="col-lg-3"
                        :user="item"
                        v-for="(item, id) in users.latest"
                        :key="id"
                      >
                      </UserCard>
                    </div>
                    <div class="showMore mt-2">
                      Ver más
                    </div>

                    <hr class="mt-2" />
                  </section>
                  <!-- eventos end-->
                  <!-- en vivo strat-->
                  <section>
                    <p class="pt-3">
                      <b>{{ taps[6] }}</b>
                    </p>
                    <div class="row pl-4 pr-4">
                      <UserCard
                        id="vivo"
                        class="vivo mr-4"
                        :user="item"
                        v-for="(item, id) in users.latest"
                        :key="id"
                      >
                      </UserCard>
                    </div>
                    <div class="showMore mt-2">
                      Ver más
                    </div>

                    <hr class="mt-2" />
                  </section>
                  <!-- en vivo end-->
                </div>
              </b-tab>
              <!-- tap ahora end  -->
              <!-- tap populares start  -->
              <b-tab title="Populares" :title-link-class="linkClass(1)">
                <div class="pt-3 col-12">
                  <section>
                    <p class="pt-3">
                      <b>{{ taps[1] }}</b>
                    </p>
                    <div class="row pl-4 pr-4">
                      <UserCard
                        class=""
                        :user="item"
                        v-for="(item, id) in users.top"
                        :key="id"
                      >
                      </UserCard>
                    </div>
                    <div class="showMore mt-2">
                      Ver más
                    </div>

                    <hr class="mt-2" />
                  </section>
                  <!-- famosos strat-->
                  <section>
                    <p class="pt-3">
                      <b>{{ taps[1] }}</b>
                    </p>
                    <div class="row pl-4 pr-4">
                      <UserCard
                        class=""
                        :user="item"
                        v-for="(item, id) in users.populars"
                        :key="id"
                      >
                      </UserCard>
                    </div>
                    <div class="showMore mt-2">
                      Ver más
                    </div>

                    <hr class="mt-2" />
                  </section>
                  <!-- famosos end-->
                  <!-- ultimos creados strat-->
                  <section>
                    <p class="pt-3">
                      <b>{{ taps[2] }}</b>
                    </p>
                    <div class="row pl-4 pr-4">
                      <UserCard
                        class=""
                        :user="item"
                        v-for="(item, id) in users.latest"
                        :key="id"
                      >
                      </UserCard>
                    </div>
                    <div class="showMore mt-2">
                      Ver más
                    </div>

                    <hr class="mt-2" />
                  </section>
                  <!-- ultimos creados end-->

                  <!-- ceraca de ti strat-->
                  <section>
                    <p class="pt-3">
                      <b>{{ taps[3] }}</b>
                    </p>
                    <div class="row pl-4 pr-4">
                      <UserCard
                        id="near"
                        class="near mr-4"
                        :user="item"
                        v-for="(item, id) in users.near"
                        :key="id"
                      >
                      </UserCard>
                    </div>
                    <div class="showMore mt-2">
                      Ver más
                    </div>

                    <hr class="mt-2" />
                  </section>
                  <!-- cerca de ti end-->
                  <!-- eventos strat-->
                  <section>
                    <p class="pt-3">
                      <b>{{ taps[5] }}</b>
                    </p>
                    <div class="row pl-4 pr-4">
                      <UserCard
                        class="col-lg-3"
                        :user="item"
                        v-for="(item, id) in users.latest"
                        :key="id"
                      >
                      </UserCard>
                    </div>
                    <div class="showMore mt-2">
                      Ver más
                    </div>

                    <hr class="mt-2" />
                  </section>
                  <!-- eventos end-->
                  <!-- en vivo strat-->
                  <section>
                    <p class="pt-3">
                      <b>{{ taps[6] }}</b>
                    </p>
                    <div class="row pl-4 pr-4">
                      <UserCard
                        id="vivo"
                        class="vivo mr-4"
                        :user="item"
                        v-for="(item, id) in users.latest"
                        :key="id"
                      >
                      </UserCard>
                    </div>
                    <div class="showMore mt-2">
                      Ver más
                    </div>

                    <hr class="mt-2" />
                  </section>
                  <!-- en vivo end-->
                </div>
              </b-tab>
              <!-- tap populares end  -->
              <!-- tap cerca start  -->
              <b-tab title="Cerca" :title-link-class="linkClass(3)">
                <div class="pt-3 col-12">
                  <section>
                    <p class="pt-3">
                      <b>{{ taps[3] }}</b>
                    </p>
                    <div class="row pl-4 pr-4">
                      <UserCard
                        class=""
                        :user="item"
                        v-for="(item, id) in users.near"
                        :key="id"
                      >
                      </UserCard>
                    </div>
                    <div class="showMore mt-2">
                      Ver más
                    </div>

                    <hr class="mt-2" />
                  </section>
                  <!-- famosos strat-->
                  <section>
                    <p class="pt-3">
                      <b>{{ taps[1] }}</b>
                    </p>
                    <div class="row pl-4 pr-4">
                      <UserCard
                        class=""
                        :user="item"
                        v-for="(item, id) in users.populars"
                        :key="id"
                      >
                      </UserCard>
                    </div>
                    <div class="showMore mt-2">
                      Ver más
                    </div>

                    <hr class="mt-2" />
                  </section>
                  <!-- famosos end-->
                  <!-- ultimos creados strat-->
                  <section>
                    <p class="pt-3">
                      <b>{{ taps[2] }}</b>
                    </p>
                    <div class="row pl-4 pr-4">
                      <UserCard
                        class=""
                        :user="item"
                        v-for="(item, id) in users.latest"
                        :key="id"
                      >
                      </UserCard>
                    </div>
                    <div class="showMore mt-2">
                      Ver más
                    </div>

                    <hr class="mt-2" />
                  </section>
                  <!-- ultimos creados end-->

                  <!-- ceraca de ti strat-->
                  <section>
                    <p class="pt-3">
                      <b>{{ taps[3] }}</b>
                    </p>
                    <div class="row pl-4 pr-4">
                      <UserCard
                        id="near"
                        class="near mr-4"
                        :user="item"
                        v-for="(item, id) in users.near"
                        :key="id"
                      >
                      </UserCard>
                    </div>
                    <div class="showMore mt-2">
                      Ver más
                    </div>

                    <hr class="mt-2" />
                  </section>
                  <!-- cerca de ti end-->
                  <!-- eventos strat-->
                  <section>
                    <p class="pt-3">
                      <b>{{ taps[5] }}</b>
                    </p>
                    <div class="row pl-4 pr-4">
                      <UserCard
                        class="col-lg-3"
                        :user="item"
                        v-for="(item, id) in users.latest"
                        :key="id"
                      >
                      </UserCard>
                    </div>
                    <div class="showMore mt-2">
                      Ver más
                    </div>

                    <hr class="mt-2" />
                  </section>
                  <!-- eventos end-->
                  <!-- en vivo strat-->
                  <section>
                    <p class="pt-3">
                      <b>{{ taps[6] }}</b>
                    </p>
                    <div class="row pl-4 pr-4">
                      <UserCard
                        id="vivo"
                        class="vivo mr-4"
                        :user="item"
                        v-for="(item, id) in users.latest"
                        :key="id"
                      >
                      </UserCard>
                    </div>
                    <div class="showMore mt-2">
                      Ver más
                    </div>

                    <hr class="mt-2" />
                  </section>
                  <!-- en vivo end-->
                </div>
              </b-tab>
              <!-- tap cerca end  -->
              <!-- tap One on one start  -->
              <b-tab title="One on One" :title-link-class="linkClass(4)">
                <div class="pt-3 col-12">
                  <section>
                    <p class="pt-3">
                      <b>{{ taps[4] }}</b>
                    </p>
                    <div class="row pl-4 pr-4">
                      <UserCard
                        class=""
                        :user="item"
                        v-for="(item, id) in users.private"
                        :key="id"
                      >
                      </UserCard>
                    </div>
                    <div class="showMore mt-2">
                      Ver más
                    </div>

                    <hr class="mt-2" />
                  </section>
                  <!-- famosos strat-->
                  <section>
                    <p class="pt-3">
                      <b>{{ taps[1] }}</b>
                    </p>
                    <div class="row pl-4 pr-4">
                      <UserCard
                        class=""
                        :user="item"
                        v-for="(item, id) in users.populars"
                        :key="id"
                      >
                      </UserCard>
                    </div>
                    <div class="showMore mt-2">
                      Ver más
                    </div>

                    <hr class="mt-2" />
                  </section>
                  <!-- famosos end-->
                  <!-- ultimos creados strat-->
                  <section>
                    <p class="pt-3">
                      <b>{{ taps[2] }}</b>
                    </p>
                    <div class="row pl-4 pr-4">
                      <UserCard
                        class=""
                        :user="item"
                        v-for="(item, id) in users.latest"
                        :key="id"
                      >
                      </UserCard>
                    </div>
                    <div class="showMore mt-2">
                      Ver más
                    </div>

                    <hr class="mt-2" />
                  </section>
                  <!-- ultimos creados end-->

                  <!-- ceraca de ti strat-->
                  <section>
                    <p class="pt-3">
                      <b>{{ taps[3] }}</b>
                    </p>
                    <div class="row pl-4 pr-4">
                      <UserCard
                        id="near"
                        class="near mr-4"
                        :user="item"
                        v-for="(item, id) in users.near"
                        :key="id"
                      >
                      </UserCard>
                    </div>
                    <div class="showMore mt-2">
                      Ver más
                    </div>

                    <hr class="mt-2" />
                  </section>
                  <!-- cerca de ti end-->
                  <!-- eventos strat-->
                  <section>
                    <p class="pt-3">
                      <b>{{ taps[5] }}</b>
                    </p>
                    <div class="row pl-4 pr-4">
                      <UserCard
                        class="col-lg-3"
                        :user="item"
                        v-for="(item, id) in users.latest"
                        :key="id"
                      >
                      </UserCard>
                    </div>
                    <div class="showMore mt-2">
                      Ver más
                    </div>

                    <hr class="mt-2" />
                  </section>
                  <!-- eventos end-->
                  <!-- en vivo strat-->
                  <section>
                    <p class="pt-3">
                      <b>{{ taps[6] }}</b>
                    </p>
                    <div class="row pl-4 pr-4">
                      <UserCard
                        id="vivo"
                        class="vivo mr-4"
                        :user="item"
                        v-for="(item, id) in users.latest"
                        :key="id"
                      >
                      </UserCard>
                    </div>
                    <div class="showMore mt-2">
                      Ver más
                    </div>

                    <hr class="mt-2" />
                  </section>
                  <!-- en vivo end-->
                </div>
              </b-tab>
              <!-- tap One on one end  -->
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
    <div class="footer col-12">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import env from "../config/env";
import UserCard from "../components/UserCard";
import footer from "../components/Footer";
export default {
  name: "social-time",
  components: {
    UserCard,
    footer
  },
  data() {
    return {
      users: [],
      tapCount: 1,
      tabGenral: null,
      taps: [
        "Top 10 los más vistos ahora",
        "Famosos",
        "Últimos lives creados",
        "Cerca de ti",
        "One on one",
        "Eventos",
        "En vivo ahora"
      ],
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDQ2ODIwODEsIm5iZiI6MTYwNDY4MjA4MSwiZXhwIjoxNjA0Njg1NjgxLCJkYXRhIjp7InVpZCI6ImR4RVVGaXNEaG4zbUF5UjhQMWc2MktiYkxSR3hrMExsc3VVSUhvemh3dk09In19.FcNLwPdCNrBcZbCfGJihaBADgr-uCI74CyFc5ithAhI",
      urlUsers: process.env.api + "/users/getUsers"
    };
  },

  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ["red", "text-light"];
      } else {
        return ["bg-light", "text-info"];
      }
    }
  },

  created() {
    let urlencoded = new URLSearchParams();
    urlencoded.append("uid", "871f870388af7fb06aee939096834777");
    urlencoded.append("ageRange", "18-26");
    urlencoded.append("citieId", "9609540");

    let requestOptions = {
      method: "POST",
      headers: {
        "X-ST-Auth-Token":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDQ2ODIwODEsIm5iZiI6MTYwNDY4MjA4MSwiZXhwIjoxNjA0Njg1NjgxLCJkYXRhIjp7InVpZCI6ImR4RVVGaXNEaG4zbUF5UjhQMWc2MktiYkxSR3hrMExsc3VVSUhvemh3dk09In19.FcNLwPdCNrBcZbCfGJihaBADgr-uCI74CyFc5ithAhI",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: urlencoded
    };

    fetch(`${env.enpoint}/videoChat/getHome`, requestOptions)
      .then(response => response.json())
      .then(result => {
        this.users = result;
      })
      .catch(error => {
        alert(error);
      });
  }
};
</script>

<style scopod>
#vivo > .card.img-user {
  height: 187px;
  width: 158px;
}
#near > .card.img-user {
  height: 187px;
  width: 158px;
}
.nav-tabs {
  border-bottom: 0px solid;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  border-bottom: 0px solid;
}
.nav-tabs .nav-link:hover,
.nav-tabs .nav-link:focus {
  border-color: #ffffff #ffffff #ffffff;
}
.tabs {
  margin: auto;
  width: 100%;
}
.tabs li a {
  color: #4d4d4d;
  padding-left: 40px;
  padding-right: 30px;
  width: 200px;
  text-align: center;
}
.text-info {
  color: #797979 !important;
}
ul {
  margin: auto;
  justify-content: center;
  padding-top: 10px;
}
a.text-info:hover,
a.text-info:focus {
  color: #ffffff !important;
}
a.bg-light:hover,
a.bg-light:focus,
button.bg-light:hover,
button.bg-light:focus {
  background-color: #00c5e0 !important;
  border-radius: 22px;
  padding-right: 35px;
  width: 200px;
  text-align: center;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  background-color: #00c5e0 !important;
  border-radius: 22px;
  padding-right: 35px;
  width: 200px;
  text-align: center;
  color: white !important;
}
.nav-tabs .nav-link {
  margin-bottom: -1px;
  border-right: 1px solid #4a3d3d4f;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #495057;
  background-color: #fff;
  border-color: #ffffff #ffffff #fff;
}
.bg-light {
  background-color: #ffffff !important;
}
.card.img-user {
  padding: 10px;
  cursor: pointer;
  background-size: cover;
  background-repeat: no-repeat;
  height: 150px;
  border-radius: 15px;
  margin: 10px;
}
.showMore {
  width: 100px;
  color: #00c5e0;
  display: flex;
  margin: auto;
  font-size: 11px;
  cursor: pointer;
}
</style>
