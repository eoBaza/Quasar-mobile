<template>
  <q-header class="qheader" elevated style="background-color: rgba(255, 0, 0, 0.85); display: flex; justify-content: space-evenly;">

    <p style="font-size: 20px;margin: 2%;text-shadow: -1px -1px 1px rgb(0, 0, 0), 1px -1px 1px black, -1px 1px 1px black, 1px 1px 1px black;">Nome: {{ loggedInUser.nome }}</p>
    <p style="font-size: 20px;margin: 2%;text-shadow: -1px -1px 1px rgb(0, 0, 0), 1px -1px 1px black, -1px 1px 1px black, 1px 1px 1px black;">CPF:{{ loggedInUser.cpf }}</p>
  </q-header>

  <q-page>
    <div style="margin-top: 10%; margin-bottom: 10%">
      <div class="corpo">
        <div class="wrapper">
          <div class="buttons">
            <p> <router-link to="/LoginPage"><q-btn class="button-color" to="/Obra">DADOS DA CONTA</q-btn></router-link> </p>
          </div>

          <div class="buttons">
            <p> <router-link to="/Pagamento"><q-btn class="button-color">PAGAMENTOS</q-btn></router-link> </p>
          </div>
        </div>
      </div>
    </div>

    <img src="../assets/Home2.png" alt="Locuos por frango" style="width: 100%; opacity: 0.4;">

  </q-page>

</template>

<script setup>
import { useRouter } from 'vue-router';

const loggedInCpf = localStorage.getItem('loggedInCpf');
const pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];
const loggedInUser = pessoas.find(pessoa => pessoa.cpf === loggedInCpf) || {};

const router = useRouter();
defineOptions({
  name: 'ConfPage'
});
</script>
