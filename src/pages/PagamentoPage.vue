<template>
  <q-header class="qheader" elevated style="background-color: rgb(255, 0, 0,0.85);">
    <p style="font-size: 20px;margin: 2%;text-shadow: -1px -1px 1px rgb(0, 0, 0), 1px -1px 1px black, -1px 1px 1px black, 1px 1px 1px black;">{{ loggedInUser.nome }}</p>
  </q-header>

  <q-page>
    <ul v-if="store.pedidos && store.pedidos.length > 0">
      <li v-for="item in store.pedidos" :key="item.id" style="list-style-type: none; display: flex; align-items: center; margin-top: 10px;">
        Pedido {{ item.id }} - {{ item.total }}
      </li>
    </ul>
    <p v-else style="text-align: center; margin-top: 20px;">Nenhum pedido encontrado.</p>
    <img src="../assets/Home2.png" alt="Locuos por frango" style="width: 100%; opacity: 0.4;">

  </q-page>

</template>

<script setup>
import { store } from '../store'; // Importar Script STORE.js
import { useRouter } from 'vue-router';

const router = useRouter();

const loggedInCpf = localStorage.getItem('loggedInCpf');
const pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];
const loggedInUser = pessoas.find(pessoa => pessoa.cpf === loggedInCpf) || {};

defineOptions({
  name: 'PagamentoPage',
});
</script>
