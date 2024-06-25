<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-header elevated style="background-color: rgba(255, 0, 0, 0.85);">
        <q-toolbar>
          <q-toolbar-title>
            <p style="font-size: 19px; margin-top: 15px;">LOUCOS POR FRANGO</p>
          </q-toolbar-title>

          <q-btn-dropdown flat color="white" icon="person" size="15px">
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>{{ loggedInUser.nome }} ({{ loggedInUser.endereco }})</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="logout">
                <q-item-section>
                  <q-item-label>Logout</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <q-btn flat icon="shopping_cart" size="15px" color="white" @click="toggleCart">
            <q-badge v-if="store.carrinho.length > 0" floating color="green" :content="store.carrinho.length">{{store.carrinho.length}}</q-badge>
          </q-btn>
        </q-toolbar>
      </q-header>

      <q-page style="background-color: rgb(254, 220, 98);" padding>
        <div v-for="produto in produtos" :key="produto.id" style="display:flex; margin-bottom: 15px;">
          <q-card class="my-card" flat bordered style="width: 50%; float: left;">
            <img :src="produto.imagem">
          </q-card>
          <q-card style="width: 50%; text-align: center; background-color: white; background-color: #F52F15;">
            <p
              style="width: 100%; font-size:18px; text-shadow: -1px 0 black, 0 2px black, 2px 0 black, 0 -1px black; float: right; color: white;">
              {{ produto.nome }}
            </p>
            <p
              style="width: 100%; font-size:18px; text-shadow: -1px 0 black, 0 2px black, 2px 0 black, 0 -1px black; float: right; color: white;">
              R${{ produto.valor }}
            </p>
            <q-btn label="ADICIONAR"
              style="background-color: rgb(141, 4, 4); background-color: yellow; width: 90%; font-size: 15px; float: right; margin-right: 5%; margin-top: 15px;"
              icon="shopping_cart" @click="adicionarAoCarrinho(produto)" />
          </q-card>
        </div>
      </q-page>
    </q-page-container>

    <q-dialog v-model="cartDialog">
      <q-card >
        <q-card-section>
          <div class="text-h6">CARRINHO</div>
        </q-card-section>
        <q-card-section>
          <ul>
            <li v-for="item in store.carrinho" :key="item.id" style="list-style-type: none;">
              {{ item.nome }} - R$ {{ item.valor }}
              <q-btn size="10px" dense class="q-ml-md" round icon="remove" color="red" @click="removerCarrinho(item)"/> 
              </li>
          </ul>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="Pagamento" color="green" to="/Carrinho"/>
          <q-btn flat label="Fechar" color="red" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- alerta criado para remover o produto do carrinho-->
    <q-dialog v-model="removeDialog">
      <q-card>
        <q-card-section class="row items-center">
          <q-icon name="close" size="2em" color="red" />
          <span class="q-ml-sm">Produto Removido do carrinho!!</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="red" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  <!-- alerta criado para adicionar o produto do carrinho-->
    <q-dialog v-model="alertDialog">
      <q-card>
        <q-card-section class="row items-center">
          <q-icon name="check" size="2em" color="green" />
          <span class="q-ml-sm">Produto adicionado ao carrinho!</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="green" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { QPage, QCard, QBtn, QBadge, QDialog, QIcon, QHeader, QToolbar, QToolbarTitle, QLayout, QImg } from 'quasar';
import { store } from '../store'; // Importar a store global

defineOptions({
  name: 'IndexPage'
});

const produtos = ref([]);
const cartDialog = ref(false);
const alertDialog = ref(false);
const removeDialog = ref(false);
const produtoTemp = ref(null); // Alterar para ref

const toggleCart = () => {
  cartDialog.value = !cartDialog.value;
};

const removerCarrinho = (produto) => {
  store.removerItem(produto);
  removeDialog.value = true;
};

const adicionarAoCarrinho = (produto) => {
  store.adicionarItem(produto); // Usar a store para adicionar item
  alertDialog.value = true; // Mostrar o alerta
  produtoTemp.value = null; // Limpar produtoTemp
  acompanhamentosSelecionados.value = []; // Limpar os acompanhamentos selecionados
};
const logout = () => {
  localStorage.removeItem('loggedInCpf');
  router.push('/login');
};
const loggedInCpf = localStorage.getItem('loggedInCpf');
const pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];
const loggedInUser = pessoas.find(pessoa => pessoa.cpf === loggedInCpf) || {};

onMounted(() => {
  fetch('/produtos.json')
    .then(response => response.json())
    .then(data => {
      produtos.value = data;
    })
    .catch(error => {
      console.error('Erro ao carregar o JSON:', error);
    });
});
</script>

<style>
/* Adicione algum estilo para o diálogo de acompanhamentos, se necessário */
</style>
