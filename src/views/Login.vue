<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const router = useRouter()

const goToHome = () => {
  localStorage.setItem('isLogged', 'true')
  localStorage.setItem('isFirstLogin', 'false')
  router.push({ name: 'Home' })
}
</script>

<template>
  <div class="login-page">
    <div class="header">
      <img src="../assets/StatsGymLogo.svg" alt="StatsGym Logo">
    </div>

    <div class="login-form">
    <v-container>
      <h3 class="login-form-title">Olá gigante, <br> Seja bem vindo!</h3>

      <label for="name">Nome</label>
      <v-text-field id="name" v-model="name" density="compact" variant="outlined" hide-details></v-text-field>

      <label for="email">E-mail</label>
      <v-text-field id="email" v-model="email" density="compact" variant="outlined" hide-details></v-text-field>

      <label for="password">Senha</label>
      <v-text-field id="password" v-model="password" density="compact" variant="outlined" hide-details></v-text-field>

      <label for="confirmPassword">Repita a senha</label>
      <v-text-field id="confirmPassword" v-model="confirmPassword" density="compact" variant="outlined" hide-details></v-text-field>

      <v-btn block color="#E1B12C" theme="dark" size="large" class="mt-10" @click="goToHome()">Entrar</v-btn>
    </v-container>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.login {
  &-page {
    background-color: #121212;
    background-size: cover;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
}

.header {
  text-align: center;
}

.login-form {
  &-title {
    color: #F7F7F7;
    font-family: Poppins;
    font-size: 22px;
    font-weight: 600;

    margin-bottom: 30px;
  }

  .v-input {
    margin-bottom: 12px !important;
  }
}
</style>