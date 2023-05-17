<script setup lang="ts">
import { ref } from 'vue';
import CardDisplay from '../components/utilities/CardDisplay.vue';

import { useRouter } from 'vue-router';
const router = useRouter();

const goToRegisterWorkout = () => router.push({ name: 'RegisterWorkout' });

const workoutList = ref([
  { name: 'Remada Cavalinho', sets: 4 },
  { name: 'Puxada Alta Pronada', sets: 4 },
  { name: 'Remada Baixa Triângulo', sets: 4 },
  { name: 'PullDown', sets: 4 },
  { name: 'Remada Uliateral Halter', sets: 4 },
  { name: 'Rosca Direta Barra W', sets: 4 },
  { name: 'Rosca Scott', sets: 4 },
  { name: 'Rosca Martelo', sets: 4 },
]);
</script>

<template>
  <div class="view-workout-wrapper">
    <h2 class="page-header">Visualizar treino</h2>

    <CardDisplay
      type="large"
      identificator="Treino A"
      information="8 Exercícios"
      workout="Peito e Ombro"
    />

    <h2 class="page-subheader mb-1">Detalhes</h2>
    <p class="workout-description mb-4">
      Treino com ênfase no detalhamento das costas. 10/12reps.
    </p>

    <v-table density="compact">
      <thead>
        <tr>
          <th class="text-left">EXERCÍCIO</th>
          <th class="text-left">SÉRIES</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in workoutList" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.sets }}</td>
        </tr>
      </tbody>
    </v-table>

    <div class="fixed-button--centered">
      <v-btn
        density="default"
        color="#E1B12C"
        theme="dark"
        icon="mdi-play"
        @click="goToRegisterWorkout()"
      ></v-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.view-workout-wrapper {
  height: calc(100vh - 32px);
  .workout-description {
    color: #969696;
    font-size: 14px;
  }
}
</style>
