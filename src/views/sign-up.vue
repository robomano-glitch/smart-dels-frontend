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
                        <img src="@/assets/images/logo.png" alt="logo">
                    </div>
                    <h3>Smart Deliveries</h3>
                </div>

                <div class="input-details">
                    <form action="#">
                        <h5>Login</h5>
                        <p>Enter your email address and password.</p>
                        <div class="input-container">
                            <ion-icon :icon="person"></ion-icon>
                            <input class="input-field" type="text" placeholder="Username" name="usrnm">
                        </div>
                        <div class="input-container">
                            <ion-icon :icon="mail"></ion-icon>
                            <input class="input-field" type="password" placeholder="Email Address" name="psw">
                        </div>
                        <div class="input-container">
                            <ion-icon :icon="lockClosed"></ion-icon>
                            <input class="input-field" type="password" placeholder="Password" name="psw">
                        </div>
                        <button type="submit" class="btn">
                            Register
                        </button>
                    </form>
                </div>

                <div class="sign-in">
                    <h6>Already have an account?. 
                    <span class="sign-up-link">
                        <router-link to="/SignIn">Sign in</router-link></span>
                    </h6>     
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
import { person, mail, lockClosed } from 'ionicons/icons';
import { IonIcon } from '@ionic/vue';

export default {
    name: 'SplashScreen1',
        components: {
            mainLayout,
            IonContent,
            IonPage,
            IonIcon
        },
        data(){
            return{
                close,
                person, mail, lockClosed
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
  margin-top: 5vh;
}

.sign-in{
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
    padding-top: 0px;
    padding-bottom: 0px;
    color: #393939;
}

.flex-group > p {
    margin-bottom: 0px;
    margin-top: 0px;
    padding-bottom: 0px;
    padding-top: 0px;
    color: #979797;
}

.logo-holder{
    background-color: white;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 15px;
    margin-bottom: 20px;
    box-shadow: -2px 1px 50px 3px rgba(168,168,168,0.37);
    -webkit-box-shadow: -2px 1px 50px 3px rgba(168,168,168,0.37);
    -moz-box-shadow: -2px 1px 50px 3px rgba(168,168,168,0.37);
    border: 1px solid #e2e2e2;
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

/* Style the input container */
.input-container {
  display: flex;
  width: 100%;
  margin-bottom: 25px;
  border: 1px solid rgb(214, 214, 214);
  border-radius: 10px;
}

/* Style the form icons */
.icon {
  padding: 10px;
  background: white;
  color: white;
  min-width: 50px;
  text-align: center;
}

/* Style the input fields */
.input-field {
  width: 100%;
  padding: 10px;
  outline: none;
  border: 0px solid black;
}

.input-field:focus {
  border: 2px solid dodgerblue;
}

/* Set a style for the submit button */
.btn {
  background-color: var(--light-yellow);
  color: white;
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  border-radius: 10px;
}

.btn:hover {
  opacity: 1;
}

.input-details{
    margin-top: 100px;
}
</style>
  