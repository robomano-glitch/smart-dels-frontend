<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <topNav />
            <div class="container ion-text-center">
                <h4 class="heading">How did the food <br> taste? </h4>
                <img src="../assets/images/emoji.png" alt="chef icon" width="150">
            </div>
            <div class="container-text">
                <p class="comment">Add comment</p>
            </div>
            <div class="container ion-text-center">
                <div class="textarea">
                    <textarea name="comment" class="comment-area" cols="30" rows="5"></textarea>
                </div>
                <button class="done-button">Done</button>
            </div>
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
import { IonTitle, IonToolbar, IonContent, IonPage, IonHeader, IonTabs, IonCol, IonRow, IonTabBar, IonGrid, IonRouterOutlet, IonTabButton } from '@ionic/vue';
import { close } from 'ionicons/icons';
import mainLayout from '@/components/common/main-layout.vue';
import { IonIcon } from '@ionic/vue';
import { home, barbell, mic, person } from 'ionicons/icons';

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
                ]
            }
        }
    }
</script>
  
<style scoped>
    ion-toolbar{
        --background-color:white;
        border: none;
    }
    .new-background-color{
        --background: #ffffff;
    }
    .container-text{
        margin-left: 23px;
        margin-bottom: 0px;
    }
    .comment-area{
        margin-top: 0px;
        margin-bottom: 10px;
        border-radius: 10px;
        background-color: rgb(241, 241, 241);
        border: none;
        width: 88%;
    }
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

    .done-button{
        background-color: var(--light-yellow);
        padding: 15px 10px;
        width: 90%;
        border-radius: 25px;
        font-weight: 700;
        font-size: 0.98rem;
        color: white;
        box-shadow: -2px 1px 50px 3px rgba(168,168,108,0.47);
        -webkit-box-shadow: 0px 3px 6px 0px rgba(168,180,108,0.47);
        -moz-box-shadow: -2px 1px 50px 3px rgba(168,168,108,0.47);
    }
</style>
  