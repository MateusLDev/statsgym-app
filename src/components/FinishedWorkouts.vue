<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import CardDisplay from '../components/utilities/CardDisplay.vue';
import PageHeader from '@/components/utilities/PageHeader.vue';

import { useRouter, useRoute } from 'vue-router';
import INewWorkout from '../types/newWorkouts';

const router = useRouter();
const route = useRoute();
let workoutData = ref<any[]>();

const goToRegisterWorkout = () =>
  router.push({ name: 'RegisterWorkout', params: { id: route.params.id } });

const getFinishedWorkouts = () => {
  workoutData.value = JSON.parse(localStorage.getItem('finishedWorkouts'))
};

getFinishedWorkouts();

const setWorkoutInformation = (setAmount: number | undefined) =>
  `${setAmount} Exercícios`;
</script>

<template>
  <div class="view-workout-wrapper">
    <!-- <PageHeader>Treinos finalizados</PageHeader> -->

    <div v-for="(finishedWorkout, index) in workoutData" :key="index">
      <h2 class="page-subheader mb-1">
        {{ finishedWorkout.name }} - {{ finishedWorkout.finishedDate }}
      </h2>

      <div v-for="(exercise, index) in finishedWorkout.exercises" :key="index">
        <p class="workout-description mb-0 mt-6">
          {{ exercise.name }}
        </p>

        <v-table density="compact">
          <thead>
            <tr>
              <th class="text-left">SÉRIE</th>
              <th class="text-left">KG</th>
              <th class="text-left">REPS</th>
              <th class="text-left">REPS RES.</th>
              <th class="text-left">AJUDA</th>
              <th class="text-left">FALHA</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in exercise?.sets" :key="item.name">
              <td>{{ index + 1 }}</td>
              <td>{{ item.weight }}</td>
              <td>{{ item.reps }}</td>
              <td>{{ item.reserveReps }}</td>
              <td>
                <v-checkbox
                  v-model="item.accessories"
                  disabled
                  color="#E1B12C"
                  hide-details
                ></v-checkbox>
              </td>
              <td>
                <v-checkbox
                  v-model="item.failedSet"
                  disabled
                  color="#E1B12C"
                  hide-details
                ></v-checkbox>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
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
