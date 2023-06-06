<template>
    <ion-page>
        <ion-content :fullscreen="true">
            Hello world
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
import { IonContent, IonPage, IonHeader, IonTabs, IonCol, IonRow, IonTabBar, IonGrid, IonRouterOutlet, IonTabButton } from '@ionic/vue';
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
    
</style>
  