<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

const goToLogin = () => {
  router.push({ name: 'Login' })
}
</script>

<template>
  <div class="welcome-page">
    <div class="header">
      <img src="../assets/StatsGymLogo.svg" alt="StatsGym Logo">
    </div>

    <div class="app-description">
      <h3 class="app-description-title">Organize seus treinos e controle sua evolução.</h3>

      <div class="app-description-divider"></div>

      <p class="app-description-subtitle">registre seus exercícios, juntamente com as cargas e repetições, afim de
        monitorar seu desempenho.</p>
    </div>

    <div class="welcome-actions">
      <v-btn block color="#E1B12C" theme="dark" size="large" class="mb-6" @click="goToLogin()">Entrar</v-btn>
      <v-btn block color="#E1B12C" variant="outlined" theme="dark" size="large">Criar conta</v-btn>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.welcome {
  &-page {
    background-image: url('../assets/bgWelcome.png');
    background-size: cover;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &-actions {
    // position: absolute;
    // width: 100%;
    // bottom: 40px;
    margin-bottom: 40px;
    padding: 0 30px;
  }
}

.header {
  margin-top: 4.5rem;
  // padding: 90px 0;
  text-align: center;
}

.app-description {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-title {
    color: #F7F7F7;
    text-align: center;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 600;
    margin: 0 2rem;
  }

  &-divider {
    width: 203px;
    height: 1px;
    border: 1px solid #f7f7f780;
    margin: 30px 0;
  }

  &-subtitle {
    color: #F7F7F7;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    margin: 0 1.5rem 30px;
  }
}
</style>