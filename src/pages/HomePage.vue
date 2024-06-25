<template>
  <q-layout view="hHh lpR fFf">
    <!-- Cabeçalho -->
    <q-header elevated style="background-color: rgba(255, 0, 0, 0.85);">
      <q-toolbar>
        <img
          alt="frango logo"
          src="../assets/Home2.png"
          style="width: 50px; height: 50px;"
        />
        <q-toolbar-title>
          <p style="font-size: 13px; margin-top: 25px;">{{ store.cpf }} Pontos:  {{ store.pontos(store.cpf) }}</p>
        </q-toolbar-title>

        <q-btn-dropdown flat color="white" icon="person" size="15px">
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>{{ loggedInUser.nome }} ({{ loggedInUser.cpf }})</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="logout">
              <q-item-section>
                <q-item-label>Logout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

      </q-toolbar>
    </q-header>

    
    <q-page class="flex flex-center" style="background-color: #FEDC62;">
      <div class="flex flex-center full-height column">
        <img
          alt="frango logo"
          src="../assets/home.jpeg"
          style="margin-top:44px; width: 375px; height: 410px;"
        to="/Cardapio">
        <q-btn label="VENHA CONFERIR" rounded
          style="background-color: rgb(255, 199, 0); color: rgb(141, 4, 4); width: 50%;; font-size: 15px; float: right; margin-right: 5%; margin-top: 15px;" to="/Cardapio"/>
        
      </div>
      <h1 style="font-size: 34px; margin-bottom: -38px;">HORÁRIOS</h1>
    </q-page>
    <q-page class="q-pa-md" style="background-color: red">
      <q-table
        :rows="schedule"
        :columns="columns"
        row-key="day"
        flat
        rows-per-page-options="[]"
        :pagination.sync="pagination"
        hide-bottom
        class="q-ma-md"
        style="background-color: #FFF;"
      />
    </q-page>
    <div style="text-align:center; background-color: rebeccapurple; color:white; width: 30%; border-radius:0px 15px 15px 0 ">
      <h2 style=" font-size: 34px;">AÇAI</h2>
    </div>
    <q-page style="background-color: rebeccapurple; color: white; text-align: center;">
      
      <h2 style="font-size: 35px;"> VENHA CONHECER<br></h2>
      <div style="display: flex; justify-content: center;">
        <img src="../assets/acai.png" alt="" style="width: 70%;">
        
      </div>
      <div style=" background-color: white;">
        <a href="https://acaidosloucos.netlify.app/#/" style="text-decoration: none; color: rebeccapurple;">Cliqq aqui<br>e venha conhecer nossos produtos</a>
      </div>
    </q-page>
  </q-layout>
</template>

<style scoped>
.full-height {
  height: 100vh; 
}
</style>

<script setup>
import { ref } from 'vue';
import { store } from '../store'; 
import { useRouter } from 'vue-router';
const router = useRouter();

 const columns = [ 
  { name: 'day', align: 'left', label: 'Dia', field: 'day' },
  { name: 'morning', align: 'center', label: 'Horário', field: 'morning' }
];

const schedule = [
  { day: 'Segunda', morning: '15:00 - 23:00'},
  { day: 'Terça', morning: '11:00 - 23:00'},
  { day: 'Quarta', morning: '11:00 - 23:00'},
  { day: 'Quinta', morning: '11:00 - 23:00'},
  { day: 'Sexta', morning: '11:00 - 00:00'},
  { day: 'Sábado', morning: '11:00 - 23:30'},
  { day: 'Domingo', morning: 'FECHADO'}
];

const pagination = ref({
  rowsPerPage: 0, 
});


const loggedInCpf = localStorage.getItem('loggedInCpf');
const pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];
const loggedInUser = pessoas.find(pessoa => pessoa.cpf === loggedInCpf) || {};

const logout = () => {
  localStorage.removeItem('loggedInCpf');
  router.push('/');
};
defineOptions({
  name: 'HomePage'
});
</script>
