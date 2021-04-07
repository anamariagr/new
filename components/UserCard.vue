<template lang="html">
 
     <div class="col-6 col-md-4 col-lg-2 p-0">
     <div class="card img-user" :style="{ backgroundImage: `url('${user.photo}')` }">
     
     <div class="row">
       <div class="col-12">
        <div class="live">LIVE</div>
      </div>
      <div class="stream-description col-12">
        <p class="text-stream">{{user.title}}</p>
        <p class="text-stream"><b>{{user.fullname}}</b></p>
        <div class="row">
          <div class="col-9">
            <p class="text-stream"><span class="hard">♥</span> {{user.onlineUsers}}</p>
          </div>
          <div class="col-2">
            <div class="circle-color"></div> 
          </div>
        </div>
       </div>
     </div>
     </div>
      
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
<style scoped>
.img-user {
  
    width: 90%;
    padding: 10px;
  
}
.live {
    background-color: red;
    width: 26px;
    font-size: 10px;
    text-align: center;
    position: absolute;
    right: 12px;
    color: white;
    border-radius: 5px;
    height: 15px;
    font-size: 9px;
    padding-left: 2px;
    padding-right: 5px;
    padding-top: 1px;
}

.stream-description {
  position: absolute;
padding-left: 10px;
  bottom: 0;
  width: 100%;
  background-color: #00000099;
  left: 0;
  color: white;
  border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
p.text-stream {
    margin-bottom: 0;
    font-size: 11px;
}
span.hard {
    font-size: 15px;
    padding-right: 2px;
}
.circle-color{
height: 10px;
    width: 10px;
    background-color: #a9ef4c;
    border-radius: 10px;
    margin-top: 7px;
}
</style>
