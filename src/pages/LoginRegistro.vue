<template>
  <q-header class="qheader" elevated style="background-color:rgba(255, 0, 0, 0.85);">
    <q-toolbar-title style="text-align: center;">Tela Login Registro </q-toolbar-title>
  </q-header>
  <q-page style="max-height: 987px;">
    <q-card style="margin-top: 50px; background-color: transparent;">
      <q-card-section>
        <q-form @submit.prevent="handleLogin">
          <q-input color="red" v-model="newPessoa.cpf" type="number" label="CPF" required />
          <q-input color="red" v-model="newPessoa.nome" label="Nome" required />
          <q-input color="red" v-model="newPessoa.endereco" label="Endereço" required />
          <q-btn label="ACESSAR" type="submit"  color="red" class="q-mt-md"/>
        </q-form>
        <div v-if="errorMessage" class="text-negative q-mt-md">{{ errorMessage }}</div>
        <div v-if="successMessage" class="text-positive q-mt-md">{{ successMessage }}</div>
      </q-card-section>
    </q-card>
    <img src="../assets/Home2.png" alt="Locuos por frango" style="width: 100%; opacity: 0.4;">
  </q-page>

</template>


<script>

export default {
  name: 'LoginRegistro',
  data() {
    return {
      pessoas: [],
      newPessoa: {
        cpf: '',
        nome: '',
        endereco: ''
      },
      errorMessage: ''
    };
  },
  created() {
    const storedPessoas = localStorage.getItem('pessoas');
    if (storedPessoas) {
      this.pessoas = JSON.parse(storedPessoas);
    }
  },
  methods: {
    isValidCpf(cpf) {
      cpf = cpf.replace(/\D/g, '');
       // metodo criado para validar se o cpf possui 11 Digitos pelo baza
      return cpf.length === 11;
    },
    handleLogin() {
      this.errorMessage = '';
      this.successMessage = '';
      if (!this.isValidCpf(this.newPessoa.cpf)) {
        this.errorMessage = 'CPF deve ter 11 dígitos!';
        return;
      }

      this.pessoas.push({ ...this.newPessoa });
        localStorage.setItem('pessoas', JSON.stringify(this.pessoas));
        localStorage.setItem('loggedInCpf', this.newPessoa.cpf);
        this.errorMessage = '';
        this.successMessage = 'Cliente cadastrado e logado com sucesso!';
        this.newPessoa = { cpf: '', nome: '', endereco: '' };
        this.$router.push('/Home');
    }
  }
};


</script>
