

<template>
  <div class="container-fluid">
    <div class="row  streams">
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
                    <img class="icon-stremer" src="/img/Ico_diamantes.png" /><span class="icon-strem">55</span>
                  </div>
                  <div class="col-3 borde-left-right">
                      <img class="icon-stremer" src="/img/Ico_fav.png" /><span class="font-number">55</span>
                 
                  </div>
                  <div class="col-3 borde-right">
                      <img class="icon-stremer" src="/img/Ico_seguidores.png" /><span class="font-number">55</span>
                 
                  </div>
                  <div class="col-3">
                      <img class="icon-stremer" src="/img/Ico_vistas.png" /><span class="font-number">55</span>
                 
                  </div>
                </div>
              </div>
              <div class="col-12  pt-2 pb-3">
                <div class="row">
                  <div class="col-1">
                    <div class="premium"><img src="/img/Ico_premium.png"/></div>
                   <img class="img-face" src="/img/face.png" />
                  </div>
                  <div class="col-9 ml-5 text-left pt-1">
                    <p class="mb-0"><b>Maura Lizcano</b><span class="pl-2"><img src="/img/Ico_verificado.png"/></span></p>
                    <p>Meditación para iniciar el día</p>
                  </div>
                </div>
              </div>
              <div class="col-12 pb-3">
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
          <div class="col-12 photograpys pt-0">
            <div class="row">
              <div class="col-12">
                <div class="img-photograpy">
                  <img class=" mt-0" src="/img/girl-ocean.png"/>
                </div>
              </div>
              <div class="col-12">
                <div class="img-photograpy">
                 <img src="/img/woman-umbrella.png"/>
                </div>
              </div>
              <div class="col-6 pr-1">
                <div class="img-photograpy-media">
                 <img src="/img/img-prueba.jpg"/>
                </div>
              </div>
              <div class="col-6 pl-1">
                <div class="img-photograpy-media">
                 <img src="/img/img-prueba.jpg"/>
                </div>
              </div>
              <div class="col-12">
                <div class="img-photograpy">
                 <img src="/img/woman-prueba.png"/>
                </div>
              </div>
              <div class="col-6 pr-1">
                <div class="img-photograpy-media">
                 <img src="/img/img-prueba.jpg"/>
                </div>
              </div>
              <div class="col-6 pl-1">
                <div class="img-photograpy-media">
                 <img src="/img/img-prueba.jpg"/>
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
        <img class="img-video" src="/img/sit-woman.jpg"/>
      </div>
      <div class="col-lg-4 d-none d-lg-block pl-0 pr-0 chat">
          <div>
      <Chat v-if="visible"
        :participants="participants"
        :myself="myself"
        :messages="messages"
        :chat-title="chatTitle"
        :placeholder="placeholder"
        :colors="colors"
        :border-style="borderStyle"
        
       
        :load-more-messages="toLoad.length > 0 ? loadMoreMessages : null"
        :async-mode="asyncMode"
        :scroll-bottom="scrollBottom"
        :display-header="true"
        :send-images="true"
        :profile-picture-config="profilePictureConfig"
        
        :link-options="linkOptions"
       
        @onImageClicked="onImageClicked"
        
        @onMessageSubmit="onMessageSubmit"
        @onType="onType"
        @onClose="onClose"/>
        <div class="gifts">
          <div class="d-flex justify-content-between">
            <div class="col-4">
                  <div class="row">
                  <div class="6">
 <img class="img-gifts" src="/img/Ico_opc.png"/>
                  </div>
                   <div class="6">
 <img class="img-gifts" src="/img/Ico_corazon_blanco.png"/>
                  </div>
            </div>
            </div>
            <div class="col-4">
                  <div class="row d-flex justify-content-end">
                  <div class="6">
 <img class="img-gifts" src="/img/Ico_emoji.png"/>
                  </div>
 <img class="img-gifts" src="/img/Ico_regalo.png"/>
                  </div>
            </div>
            </div>
          </div>
        </div>
   </div>
      </div>
            </div>
      </div>
      <Footer></Footer>
    </div>
  
</template>
<script>
import { Chat } from 'vue-quick-chat'
import 'vue-quick-chat/dist/vue-quick-chat.css';

export default {
  
  name: "UserCard",

  props: {
    user: Object
  },created: function () {
    console.log("aquii mano",this.user);
  },
  components: {
    Chat
  },
  data() {
        return {
            visible: true,
            participants: [
                {
                    name: 'Arnaldo',
                    id: 1,
                    profilePicture: '/img/man1.png'
                },
                {
                    name: 'José',
                    id: 2,
                    profilePicture: '/img/woman2.jpg'
                }
            ],
            myself: {
                name: 'Matheus S.',
                id: 3,
                profilePicture: '/img/face.png'
            },
            messages: [
                {
                    content: 'received messages',
                    myself: false,
                    participantId: 1,
                    timestamp: {year: 2019, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123},
                    type: 'text'
                },
                {
                    content: 'sent messages',
                    myself: true,
                    participantId: 3,
                    timestamp: {year: 2019, month: 4, day: 5, hour: 19, minute: 10, second: 3, millisecond: 123},
                    type: 'text'
                },
                {
                    content: 'other received messages',
                    myself: false,
                    participantId: 2,
                    timestamp: {year: 2019, month: 5, day: 5, hour: 10, minute: 10, second: 3, millisecond: 123},
                    type: 'text'
                }
            ],
            chatTitle: '',
            placeholder: 'Mensaje…',
            colors: {
                header: {
                    text: '#fff'
                },
                message: {
                    myself: {
                        bg: '#5d5d5d45',
                        text: '#bdb8b8'
                    },
                    others: {
                        bg: '#343434',
                        text: '#fff'
                    },
                    messagesDisplay: {
                        bg: '#343434'
                    }
                },
                submitIcon: '#808080',
                submitImageIcon: {
                    styles: {
                    display: 'none',
                }
                }
            },
          
            hideCloseButton: false,
             asyncMode: false,
            toLoad: [
                {
                    content: 'Es además uno de mis favoritos',
                    myself: false,
                    participantId: 2,
                    timestamp: {year: 2011, month: 3, day: 5, hour: 10, minute: 10, second: 3, millisecond: 123},
                    uploaded: true,
                    viewed: true,
                    type: 'text'
                },
                {
                    content: 'Hey, John Doe! How are you today?',
                    myself: false,
                    participantId: 2,
                    timestamp: {year: 2011, month: 3, day: 5, hour: 10, minute: 10, second: 3, millisecond: 123},
                    uploaded: true,
                    viewed: true,
                    type: 'text'
                },
                {
                    content: "Hey, Adam! I'm feeling really fine this evening.",
                    myself: true,
                    participantId: 3,
                    timestamp: {year: 2010, month: 0, day: 5, hour: 19, minute: 10, second: 3, millisecond: 123},
                    uploaded: true,
                    viewed: true,
                    type: 'text'
                },
            ],
            scrollBottom: {
                messageSent: true,
                messageReceived: false
            },
            displayHeader:true,
            profilePictureConfig: {
                others: true,
                myself: true,
                styles: {
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: 'solid 2px white',
                }
            },
            timestampConfig: {   
                format: 'HH:mm',
                relative: false
            },
            // there are other options, you can check them here
            // https://soapbox.github.io/linkifyjs/docs/options.html
            linkOptions: {
                myself: {
                    className: 'myLinkClass',
                    events: {
                        click: function (e) {
                            alert('Link clicked!');
                        },
                        mouseover: function (e) {
                            alert('Link hovered!');
                        }
                    },
                    format: function (value, type) {
                        if (type === 'url' && value.length > 50) {
                            value = value.slice(0, 50) + '…';
                        }
                        return value;
                    }
                },
                others: {
                    className: 'othersLinkClass',
                    events: {
                        click: function (e) {
                            alert('Link clicked!');
                        },
                        mouseover: function (e) {
                            alert('Link hovered!');
                        }
                    },
                    format: function (value, type) {
                        if (type === 'url' && value.length > 50) {
                            value = value.slice(0, 50) + '…';
                        }
                        return value;
                    }
                }
            }
        }
    },
    methods: {
        onType: function (event) {
            //here you can set any behavior
        },
        loadMoreMessages(resolve) {
            setTimeout(() => {
                resolve(this.toLoad); //We end the loading state and add the messages
                //Make sure the loaded messages are also added to our local messages copy or they will be lost
                this.messages.unshift(...this.toLoad);
                this.toLoad = [];
            }, 1000);
        },
        onMessageSubmit: function (message) {
            /*
            * example simulating an upload callback. 
            * It's important to notice that even when your message wasn't send 
            * yet to the server you have to add the message into the array
            */
            this.messages.push(message);

            /*
            * you can update message state after the server response
            */
            // timeout simulating the request
            setTimeout(() => {
                message.uploaded = true
            }, 2000)
        },
        onClose() {
            this.visible = false;
        },
        onImageSelected(files, message){
            let src = 'https://149364066.v2.pressablecdn.com/wp-content/uploads/2017/03/vue.jpg'
            this.messages.push(message);
            /**
             * This timeout simulates a requisition that uploads the image file to the server.
             * It's up to you implement the request and deal with the response in order to
             * update the message status and the message URL
             */
            setTimeout((res) => {
                message.uploaded = true
                message.src = res.src
            }, 3000, {src});
        },
        onImageClicked(message){
            /**
             * This is the callback function that is going to be executed when some image is clicked.
             * You can add your code here to do whatever you need with the image clicked. A common situation is to display the image clicked in full screen.
             */
            console.log('Image clicked', message.src)
        }
    }
};
</script>
<style>
.streams{
      height: fit-content;
}
.premium {
    width: 100px;
    position: absolute;
}
img.participant-thumb {
    border: solid 2px white;
}
img.img-gifts {
    width: 29px;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
}


.gifts{
  position: absolute;
    bottom: 67px;
    
    width: 100%;
    text-align: center;
    padding-left: 18px;
    padding-right: 18px;

}
img.icon-stremer {
    width: 30%!important;
    height: 30px;
}
span.material-design-icon.image-icon {
    display: none;
}
.container-send-message.icon-send-message {
    position: absolute;
    right: 20px;
    bottom: 19px;
}
svg.material-design-icon__svg {
   
    transform: rotate(
333deg
);
}
.container-message-manager {
    border: 10px #343434 solid!important;
    box-shadow: 0 1px 0px 0 hsl(0deg 0% 0% / 0%)!important;
        border-radius: 23px;
            margin-top: 50px;
}
.quick-chat-container {
    border-radius: 0!important;
    height: 800px!important;
    border-bottom: solid 1px #8080801f;   
    background: #343434!important;
}
.quick-chat-container .header-container .header-paticipants-text{
  display: none!important;
}
.header-container {
  display: none!important;
}
.container-message-display{
        padding: 24px;
padding-top: 35px;
}
.container-message-display::-webkit-scrollbar {
  width: 8px;
}
.container-message-display::-webkit-scrollbar-thumb {
  background: #343434;
  border-radius: 4px;
}
.container-message-display::-webkit-scrollbar-thumb:active {
  background-color: #343434;
}
.container-message-display::-webkit-scrollbar-thumb:hover {
  background: #343434;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}
.container-message-display::-webkit-scrollbar-track {
  background: #343434;
  border-radius: 4px;
}
.container-message-display::-webkit-scrollbar-track:hover, 
.container-message-display::-webkit-scrollbar-track:active {
  background: #343434;
}
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
            height: 600px;
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
   height: 800px;
}
.img-video{
  width: 100%;  
     height: 800px;
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
