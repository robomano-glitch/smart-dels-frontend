<template>
    <ion-page>
        <p><ion-icon :icon="arrowBackCircleOutline" size="large"></ion-icon></p>
    </ion-page>
</template>
  
<script lang="ts">
import { arrowBackCircleOutline } from 'ionicons/icons';
import { IonContent, IonPage } from '@ionic/vue';
import { IonIcon } from '@ionic/vue';

export default {
    name: 'cart',
        components: {
            IonContent,
            IonPage,
            IonIcon
        },
        data(){
            return{
                arrowBackCircleOutline,
            }
        }
    }
</script>

<style scoped>
        
</style>
  