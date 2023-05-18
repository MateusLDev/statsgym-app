<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

import CardDisplay from '../components/utilities/CardDisplay.vue';
import PageHeader from '@/components/utilities/PageHeader.vue';
import { workoutHeaders } from '@/utils/headers';

import IRegisterWorkoutPayload, {
  Exercises,
  Sets,
} from '../types/RegisterWorkoutPayload';
import INewWorkout, { Exercise } from '../types/newWorkouts';

const route = useRoute();

let workoutData = ref<INewWorkout>();
const workoutToRegister = ref<IRegisterWorkoutPayload>();

const getWorkoutById = async () => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/workout/${route.params.id}`
    );
    workoutData.value = data;

    workoutToRegister.value = {
      name: workoutData.value?.name,
      finishedDate: new Date().toDateString(),
      id: workoutData.value?.id,
      exercises: setExercisesToAWorkout(workoutData.value?.exercises),
    };
    console.log('workoutToRegister', workoutToRegister.value);
  } catch (error) {
    console.log('Ocorreu um erro ao obter dados deste exercício', error);
  }
};

const setExercisesToAWorkout = (workoutList: Exercise[] | undefined) => {
  const exercises: Exercises[] = [];
  workoutList?.forEach((workout) =>
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

const setWorkoutInformation = (setAmount: number | undefined) =>
  `${setAmount} Exercícios`;

const finishWorkout = async () => {
  try {
    await axios.post(
      'http://localhost:5000/finish-workout',
      workoutToRegister.value
    );
  } catch (error) {
    console.log('Ocorreu um erro ao finalizar treino', error);
  }
};

getWorkoutById();
</script>

<template>
  <div class="view-workout-wrapper">
    <PageHeader> Registrar treino </PageHeader>

    <CardDisplay
      type="large"
      identificator="Treino A"
      :workout="workoutData?.name"
      :information="setWorkoutInformation(workoutData?.exercises.length)"
      class="mb-8"
    />

    <div class="workout-table-wrapper">
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
                  placeholder="0"
                />
              </td>
              <td>
                <input
                  class="register-workout-input"
                  type="text"
                  v-model="set.reps"
                  placeholder="0"
                />
              </td>
              <td>
                <input
                  class="register-workout-input"
                  type="text"
                  v-model="set.reserveReps"
                  placeholder="0"
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
    </div>

    <div class="fixed-button--block">
      <v-btn block color="#E1B12C" theme="dark" @click="finishWorkout()"
        >Salvar</v-btn
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.view-workout-wrapper {
  // height: calc(100vh - 32px);
  margin-bottom: 80px;
  .workout-description {
    color: #969696;
    font-size: 14px;
    width: 99%;
  }

  .workout-table-wrapper {
    margin-bottom: 80px;
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
