<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-grid>
                <ion-row>
                    <ion-col size="2" class="border">
                        <div class="back-arrow">
                            <p><ion-icon :icon="arrowBack"></ion-icon></p>
                        </div>
                    </ion-col>
                    <ion-col size="8">
                        <h5>Search</h5>
                    </ion-col>
                    <ion-col size="1">
                        <div class="back-arrow">
                            <p><ion-icon :icon="searchOutline"></ion-icon></p>
                        </div>
                    </ion-col>
                    
                    <ion-col size="1">
                        <div class="back-arrow">
                            <p><ion-icon :icon="cartOutline"></ion-icon></p>
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="12">
                        <ion-searchbar placeholder="Search for food or restaurant"></ion-searchbar>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <button class="foods-btn btn">Foods</button>
                    </ion-col>
                    <ion-col>
                        <button class="restaurants-btn btn">Restaurants</button>
                    </ion-col>
                </ion-row>
            </ion-grid>

            <div class="card-container">
                <div>
                    <div class="card" size="6" v-for="restaurant in restaurants">
                        <div class="rest-card">
                            <div class="picture">
                                <img src="../assets/images/R.jpeg" alt="">
                            </div>
                            <div class="rest-info">
                                <h5>{{ restaurant.name }}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
import { 
    IonContent, 
    IonPage, 
    IonCol, 
    IonRow, 
    IonGrid,
    IonSearchbar
 } from '@ionic/vue';
import { close } from 'ionicons/icons';
import mainLayout from '@/components/common/main-layout.vue';
import { IonIcon } from '@ionic/vue';
import { arrowBack, cartOutline, searchOutline } from 'ionicons/icons';

export default {
    name: 'SplashScreen1',
        components: {
            mainLayout,
            IonContent,
            IonPage,
            IonIcon,
            IonCol,
            IonRow,
            IonGrid,
            IonSearchbar
        },
        setup() {
            return { 
                arrowBack, cartOutline, searchOutline
            };
        },
        data(){
            return{
                close,
                restaurants:[
                    {'name':'KFC'},
                    {'name':'Mugg and bean'},
                    {'name':'Wimpy'},
                    {'name':'Elly Bs'},
                    {'name':'Pizza Inn'}
                ]
            }
        }
    }
</script>
  
<style scoped>
ion-searchbar{
    --box-shadow:none;
    --background: #f3f3f3;
    --border-radius: 1.2rem;
    --placeholder-font-weight: 600;
    --placeholder-opacity:0.2

    padding: 0;
    margin-bottom: 2rem;
}
.card-container{
    padding:10px
}
.card{
    border-radius: 15px;
    padding: 10px;
    margin-bottom: 10px;
    margin-right: 0px;
    border: 1px solid rgb(216, 216, 216);
}

.card > img{
    border-radius: 10px;
}
.flex-group{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;    
  gap: 1px;
  margin-top: 30vh;
}

.btn-col{
    border: 1px solid black;
}

.rest-card{
    border-radius: 10px;
}

.rest-info > p{
    color: rgb(53, 53, 53);
}
.border{
    display: flex;
    align-items: center;
}

.flex-group > p{
    text-align: center;
}

.back-arrow{
    width: fit-content;
    padding: 0px;
    border-radius: 5px;
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

.search-input{
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: 0px solid grey;
    background-color: #ededed;
    height: 57px;
    font-size: 18px;
}

.search-input:focus{
    border-radius: 10px;
    border: 0px solid rgb(255, 255, 255);
}

.search-btn{
    background-color: var(--light-yellow);
    padding: 5px;
    border-radius: 5px;
    height: 57px;
    width: 57px;
    color: white;
}

.foods-btn{
    background-color: white;
    box-shadow: -2px 1px 50px 3px rgba(168,168,168,0.60);
    -webkit-box-shadow: -2px 1px 50px 3px rgba(168,168,168,0.40);
    -moz-box-shadow: -2px 1px 50px 3px rgba(168,168,168,0.40);
}

.restaurants-btn{
    background-color: var(--light-yellow);
    color: white;
    box-shadow: -2px 1px 50px 3px rgba(168,168,168,0.60);
    -webkit-box-shadow: -2px 1px 50px 3px rgba(168,168,168,0.60);
    -moz-box-shadow: -2px 1px 50px 3px rgba(168,168,168,0.60);
}

.btn {
    padding: 15px 20px;
    border: none;
    cursor: pointer;
    width: 100%;
    font-weight: 700;
    font-size: 18px;
    border-radius: 25px;
}
</style>
  