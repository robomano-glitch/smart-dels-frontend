<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="container">
                <div class="top-left">
                    <img src="@/assets/images/burger.png" alt="food icon">
                </div>
                <div class="top-right">
                    <img src="@/assets/images/fries.png" alt="food icon">
                </div>  
                <div class="flex-group">
                    <div class="logo-holder">
                        <h1>SD</h1>
                    </div>
                    <h1>Pick a Restaurant</h1>
                    <p>Fastest operations to provide food <br> by the hence</p>
                    <router-link to="/SignUp">
                        <button class="go-button">
                            <ion-icon size="large" :icon="arrowForward"></ion-icon>
                        </button>
                    </router-link>
                </div>
                <div class="bottom-left">
                    <img src="@/assets/images/pizza.png" alt="food icon">
                </div>
                <div class="bottom-right">
                    <img src="@/assets/images/hotdog.png" alt="food icon">
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { close } from 'ionicons/icons';
import mainLayout from '@/components/common/main-layout.vue';
import { arrowForward } from 'ionicons/icons';
import { IonIcon } from '@ionic/vue';

export default {
    name: 'SplashScreen1',
        components: {
            mainLayout,
            IonContent,
            IonPage
        },
        data(){
            return{
                close,
                arrowForward
            }
        }
    }
</script>
  
<style scoped>
.flex-group{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;    
  gap: 1px;
  margin-top: 30vh;
}

.flex-group > p{
    text-align: center;
}

.container{
    padding:20px;
    margin: 0 auto;
    height: 100vh;
    background-color: #fefefe;
    position: relative;
}

.flex-group > h1 {
    margin-top: 0px;
    margin-bottom: 0px;
    color: #393939;
}

.flex-group > p {
    margin-bottom: 0px;
    margin-top: 0px;
    color: #979797;
}

.logo-holder{
    background-color: var(--light-yellow);
    color: white;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 15px;
    margin-bottom: 20px;
    box-shadow: -2px 1px 50px 3px rgba(118, 118, 118, 0.47);
    -webkit-box-shadow: -2px 1px 50px 3px rgba(118,118,168,0.47);
    -moz-box-shadow: -2px 1px 50px 3px rgba(118,118,118,0.47);
    border: 1px solid white;
}

.logo-holder img {
  max-width: 100%;
  max-height: 100%;
}

.top-left {
  position: absolute;
  top: 30;
  left: 0;
  height: 60px;
  margin-left: 40px;
}

.top-right {
  position: absolute;
  top: 0;
  right: 0;
  height: 60px;
  margin-right: 50px;
  margin-top: 80px;
}

.bottom-left {
  position: absolute;
  bottom: 0;
  left: 10;
  margin-left: 30px;
  height: 60px;
  margin-bottom: 150px;
}

.bottom-right {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 60px;
  margin-bottom: 50px;
  margin-right: 80px;
}

.top-right img{
    max-width: 100%;
    max-height: 100%;
    opacity: 0.1;
}

.top-left img{
    max-width: 100%;
    max-height: 100%;
    opacity: 0.1;
}

.bottom-left img{
    max-width: 100%;
    max-height: 100%;
    opacity: 0.1;
}

.bottom-right img{
    max-width: 100%;
    max-height: 100%;
    opacity: 0.1;
}

.go-button{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fece00;
    color: white;
    margin-top:100px;
}

.svg {
    fill: white;
}
</style>
  