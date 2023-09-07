<script lang="ts" setup>
import { ref } from 'vue';
import ExerciseList from '../components/ExercisesList.vue';
import MyWorkouts from '../components/MyWorkouts.vue';
import FinishedWorkouts from '@/components/FinishedWorkouts.vue';

const tab = ref(null);
</script>

<template>
  <v-container>

    <div class="greeting-title">
      <span>Hello buddy,</span>
      <h1>Chris Bumstead</h1>
    </div>

    <v-tabs v-model="tab" bg-color="#121212">
      <v-tab value="one">Treino Atual</v-tab>
      <v-tab value="two">Exercícios</v-tab>
      <v-tab value="three">Histórico</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="one">
        <h2 class="page-subheader">Lista de exercícios</h2>

        <!-- talvez criar um englobador e so passar como slot o card com o v-for, ja que o estilo é o mesmo -->
        <MyWorkouts />
      </v-window-item>

      <v-window-item value="two">
        <h2 class="page-subheader">Lista de exercícios</h2>

        <!-- talvez criar um englobador e so passar como slot o card com o v-for, ja que o estilo é o mesmo -->
        <ExerciseList />
      </v-window-item>

      <v-window-item value="three">
        <h2 class="page-subheader">Treinos finalizados</h2>

        <FinishedWorkouts />
      </v-window-item>
    </v-window>
  </v-container>
</template>

<style scoped lang="scss">
.greeting-title {
  margin: 30px 0;

  span {
    color: #f7f7f7;
    font-size: 1em;
    font-weight: 300;
  }

  h1 {
    color: #e1b12c;
    font-size: 2em;
    font-weight: 600;
    line-height: 1;
  }
}
</style>
