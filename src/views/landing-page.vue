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

                <div class="greeting">
                    <img src="../assets/images/chef.png" width="120"/>
                    <h5>{{ greeting }}</h5>    
                </div>

                <div class="flex-group">
                    <button router-link-to="" class="signin">Sign In</button>
                    <button class="signup">Sign Up</button>
                </div>
                
                <div class="guest-visit">
                    <h6>Guest visit</h6>
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
                greeting: "",
            }
        },
        mounted(){
            const hour = new Date().getHours();
            if (hour >= 6 && hour < 12) {
                this.greeting = "Good Morning";
            } else if (hour >= 12 && hour < 18) {
                this.greeting = "Good Afternoon";
            } else {
                this.greeting = "Good Evening";
            }
        }
    }
</script>
  
<style scoped>
.flex-group{
  display: flex;
  justify-content: center;
  flex-direction: grid;    
  gap: 1px;
  margin-top: 5vh;
}

.flex-group > button{
    padding: 25px 40px;
    margin:2px 2px;
    width: 100%;
    border-radius: 15px;
}

.guest-visit{
    text-align: center;
    width: 100%;
    color: var(--light-yellow);
    margin-top: 30px;
}

.guest-visit > h6{
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

.greeting{
    width: 100%;
    justify-content: center;
    text-align: center;
    margin-top: 200px;
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
}

/* Style the form icons */
.icon {
  padding: 10px;
  background: white;
  color: white;
  min-width: 50px;
  text-align: center;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;;
  border-left: 1px solid grey;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
}

/* Style the input fields */
.input-field {
  width: 100%;
  padding: 10px;
  outline: none;
  border: 0;
  border-right: 1px solid rgb(202, 202, 202);
  border-top: 1px solid rgb(202, 202, 202);
  border-bottom: 1px solid rgb(202, 202, 202);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
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
.signup{
    background-color: var(--light-yellow);
    box-shadow: -2px 1px 50px 3px rgba(168,168,168,0.60);
    -webkit-box-shadow: -2px 1px 50px 3px rgba(168,168,168,0.60);
    -moz-box-shadow: -2px 1px 50px 3px rgba(168,168,168,0.60);
}

.signin{
    background-color: white;
    box-shadow: -2px 1px 50px 3px rgba(168,168,168,0.60);
    -webkit-box-shadow: -2px 1px 50px 3px rgba(168,168,168,0.60);
    -moz-box-shadow: -2px 1px 50px 3px rgba(168,168,168,0.60);
}
</style>
  