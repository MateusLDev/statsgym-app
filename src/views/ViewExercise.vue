<script setup lang="ts">
import { ref } from 'vue';
import CardDisplay from '../components/utilities/CardDisplay.vue';
import PageHeader from '@/components/utilities/PageHeader.vue';

import { useRouter, useRoute } from 'vue-router';
import type INewWorkout from '../types/newWorkouts';

const router = useRouter();
const route = useRoute();
let workoutData = ref<INewWorkout>();

const goToRegisterWorkout = () =>
  router.push({ name: 'RegisterWorkout', params: { id: route.params.id } });

const setWorkoutData = () => {
  const myWorkots = JSON.parse(localStorage.getItem('myWorkouts') as string) as INewWorkout[]
  workoutData.value = myWorkots.find(workout => workout.id === route.params.id)
};

setWorkoutData();

const setWorkoutInformation = (setAmount: number | undefined) =>
  `${setAmount} Exercícios`;
</script>

<template>
  <v-container>

    <div class="view-workout-wrapper">
      <PageHeader>Visualizar treino</PageHeader>

      <CardDisplay type="large" identificator="Treino A" :workout="workoutData?.name"
        :information="setWorkoutInformation(workoutData?.exercises.length)" />

      <h2 class="page-subheader mb-1">Detalhes</h2>
      <p class="workout-description mb-4">
        {{ workoutData?.description }}
      </p>

      <v-table density="compact">
        <thead>
          <tr>
            <th class="text-left">EXERCÍCIO</th>
            <th class="text-left">SÉRIES</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in workoutData?.exercises" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.sets }}</td>
          </tr>
        </tbody>
      </v-table>

      <div class="fixed-button--centered">
        <v-btn density="default" color="#E1B12C" theme="dark" icon="mdi-play" @click="goToRegisterWorkout()"></v-btn>
      </div>
    </div>
  </v-container>
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
