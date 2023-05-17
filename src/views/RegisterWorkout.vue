<script setup lang="ts">
import { ref } from 'vue';
import CardDisplay from '../components/utilities/CardDisplay.vue';
import { workoutHeaders } from '@/utils/headers';

import IRegisterWorkoutPayload, {
  Exercises,
  Sets,
} from '../types/RegisterWorkoutPayload';

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

const workoutToRegister = ref<IRegisterWorkoutPayload>();

const setExercisesToAWorkout = (workoutList: any[]) => {
  const exercises: Exercises[] = [];
  workoutList.forEach((workout) =>
    exercises.push({
      name: workout.name,
      description: '',
      sets: addSetsToAnExercise(workout.sets),
    })
  );

  return exercises;
};

const addSetsToAnExercise = (setNumber: number) => {
  const sets: Sets[] = [];

  console.log('setNumber', setNumber);

  for (let i = 1; i <= setNumber; i++) {
    sets.push({
      set: i,
      weight: '',
      reps: '',
      reserveReps: '',
      failedSet: false,
      accessories: false,
    });
  }
  return sets;
};

workoutToRegister.value = {
  name: 'Costas e Biceps',
  finishedDate: new Date().toDateString(),
  id: '',
  exercises: setExercisesToAWorkout(workoutList.value),
};
</script>

<template>
  <div class="view-workout-wrapper">
    <h2 class="page-header">Registrar treino</h2>

    <CardDisplay
      type="large"
      identificator="Treino A"
      information="8 Exercícios"
      workout="Peito e Ombro"
      class="mb-8"
    />

    <div
      v-for="(workout, index) in workoutToRegister?.exercises"
      :key="index"
      class="mb-10"
    >
      <h2 class="page-subheader mb-1 ml-4">
        {{ workout.name }}
      </h2>
      <textarea
        type="text"
        class="workout-description mb-4 ml-4"
        placeholder="Adicionar notas aqui..."
        v-model="workout.description"
      />

      <v-table density="compact">
        <thead>
          <tr>
            <th
              class="text-left"
              v-for="header in workoutHeaders"
              :key="header.key"
            >
              {{ header.title }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(set, index) in workout.sets" :key="index">
            <td>{{ set.set }}</td>
            <td>
              <input
                class="register-workout-input"
                type="text"
                v-model="set.weight"
              />
            </td>
            <td>
              <input
                class="register-workout-input"
                type="text"
                v-model="set.reps"
              />
            </td>
            <td>
              <input
                class="register-workout-input"
                type="text"
                v-model="set.reserveReps"
              />
            </td>
            <td>
              <v-checkbox
                v-model="set.accessories"
                color="#E1B12C"
                hide-details
              ></v-checkbox>
            </td>
            <td>
              <v-checkbox
                v-model="set.failedSet"
                color="#E1B12C"
                hide-details
              ></v-checkbox>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>

    <div class="fixed-button--centered">
      <v-btn
        density="default"
        color="#E1B12C"
        theme="dark"
        icon="mdi-play"
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
    width: 100%;
  }

  input {
    outline: none;
    color: #fff;
  }
  .register-workout-input {
    width: 30px;
  }
}
</style>
