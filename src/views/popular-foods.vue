<template>
    <ion-page>
        <ion-header>

        </ion-header>
        <ion-content :fullscreen="true">
            <section id="content-section">
                <div class="content">
                    <ion-grid>
                        <ion-row>
                            <ion-col size="6" v-for="food in foods">
                                <div class="card-container">
                                    <div class="image">
                                        <img src="../assets/images/R.jpeg" class="card-image" alt="">
                                    </div>
                                    <div div class="info">
                                        <h6>{{ food.name }}</h6>
                                        <p>price goes here</p>
                                    </div>     
                                </div>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </div>
            </section>
        </ion-content>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="home" href="/home">
                    <ion-icon color="tertiary" :icon="home"></ion-icon>
                </ion-tab-button>

                <ion-tab-button tab="radio" href="/radio">
                    <ion-icon :icon="barbell"></ion-icon>
                </ion-tab-button>
                
                <ion-tab-button tab="library" href="/library">
                    <ion-icon :icon="mic"></ion-icon>
                </ion-tab-button>
                
                <ion-tab-button tab="search" href="/search">
                    <ion-icon :icon="person"></ion-icon>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>
  
<script lang="ts">
import { IonContent, IonPage, IonHeader, IonTabs, IonCol, IonRow, IonTabBar, IonGrid, IonRouterOutlet, IonTabButton } from '@ionic/vue';
import { close } from 'ionicons/icons';
import mainLayout from '@/components/common/main-layout.vue';
import { IonIcon } from '@ionic/vue';
import { arrowForward, home, barbell, mic, person } from 'ionicons/icons';

export default {
    name: 'popukarFoods',
        components: {
            mainLayout,
            IonContent,
            IonPage,
            IonIcon,
            IonHeader,
            IonCol,
            IonRow, 
            IonGrid,
            IonRouterOutlet,
            IonTabButton,
            IonTabBar,
            IonTabs
        },
        data(){
            return{
                close,
                person,
                home, 
                barbell, 
                mic,
                foods:[
                    {'name':'lasagna'},
                    {'name':'tomatoes'},
                    {'name':'sangria'},
                    {'name':'chips and chicken'},
                    {'name':'gorogodo'},
                    {'name':'nsima'},
                    {'name':'nsawawa'},
                    {'name':'nsawawa'},
                    {'name':'nsawawa'},
                    {'name':'nsawawa'},
                ]
            }
        }
    }
</script>
  
<style scoped>
    .card-container{
        border-radius: 10px;
        background-color: white;
    }

    ion-tab-bar{
        --background:white;
        margin: 16px 20px;
        border-radius: 10px;
        box-shadow: -2px 1px 50px 3px rgba(168,168,108,0.47);
        -webkit-box-shadow: 0px 3px 6px 0px rgba(168,180,108,0.47);
        -moz-box-shadow: -2px 1px 50px 3px rgba(168,168,108,0.47);
        border: 1px solid rgb(230, 230, 230);
    }

    .card-image{
        max-width: 100%;
        max-height: 100%;
        border-radius: 10px;
    }

    .info{
        padding: 5px;
        background-color: white;
        border-radius: 10px;
    }

    .info > p{
        color: grey;
        margin: 0px;
    }

    .info > h6{
        margin: 0px;
    }

    .content{
        height: 100vh;
        background-color: rgb(242, 242, 242);
    }
</style>
  