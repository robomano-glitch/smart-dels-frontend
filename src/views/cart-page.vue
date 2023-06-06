<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-grid>
                <ion-row>
                    <ion-col size="2">
                        <backButton />
                    </ion-col>
                    <ion-col size="8">
                        <h4>Cart</h4>
                    </ion-col>
                    <ion-col size="1">
                        <p><ion-icon :icon="searchOutline"></ion-icon></p>
                    </ion-col>
                    <ion-col size="1">
                        <p><ion-icon :icon="cartOutline"></ion-icon></p>
                    </ion-col>
                </ion-row> 
            </ion-grid>
            <div class="cart-container">
                <div v-for="item in items" class="item">
                    
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
import { IonContent, IonPage, IonGrid, IonCol, IonRow } from '@ionic/vue';
import { close } from 'ionicons/icons';
import { arrowBack, cartOutline, searchOutline } from 'ionicons/icons';
import mainLayout from '@/components/common/main-layout.vue';
import backButton from '@/components/back-button.vue';
import { IonIcon } from '@ionic/vue';

export default {
    name: 'cart',
        components: {
            mainLayout,
            IonContent,
            IonPage,
            backButton,
            IonGrid, 
            IonCol, 
            IonRow,
            IonIcon
        },
        data(){
            return{
                close,
                arrowBack, 
                cartOutline, 
                searchOutline,
                items:[
                    {"name":"avocados"}
                ]
            }
        }
    }
</script>
  
<style scoped lang="scss">
    $white: #fff;
    $yellow: #f6c90e;
    $black: #303841;

    .wrapper{
        height: 80vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        flex-wrap: wrap;
        padding: 40px 20px;
        max-width: 720px;
        margin: 0 auto;
    }
</style>
  