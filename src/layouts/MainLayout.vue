<template>
  <q-layout view="hHh lpR fFf">
    <q-footer style="background-color: rgb(255, 0, 0,0.85);">
      <q-toolbar style="display: flex; justify-content: space-evenly;">
        <q-btn flat label="HOME" icon="home" color="white" style="font-size: 20px;" to="/Home"/>
        <q-btn flat label="OPÇÕES" color="white " style="font-size: 20px;" to="/Option"/>
        <q-btn-dropdown flat color="white" icon="more_horiz" size="15px">
          <q-list>
            <q-item clickable v-close-popup; style="background-color: white;" >
              <q-item-section> 
               
                <q-btn flat label="CARRINHO" color="red " style="font-size: 20px; background: fixed;" to="/Carrinho"/>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-footer>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'MainLayout'
});

const carrinho = ref([]);

const toggleCart = () => {
  console.log('Carrinho clicado');
  // Adicione lógica para exibir/ocultar carrinho
};
</script>
