<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

import PageHeader from '@/components/utilities/PageHeader.vue';
import INewWorkout from '../types/newWorkouts';
import IExercisesList from '../types/exercises';

const router = useRouter();

const newWorkouts = ref<INewWorkout[]>([]);
let exerciseList = ref<IExercisesList[]>([]);

const addNewWorkout = () =>
  newWorkouts.value.push({ description: '', name: '', exercises: [] });

const deleteWorkout = (workoutIndex: number) =>
  newWorkouts.value.splice(workoutIndex, 1);

const addExercisesInWorkout = (index: number) =>
  newWorkouts.value[index].exercises.push({ name: '', sets: null });

const deleteExercise = (exerciseIndex: number, workoutIndex: number) => {
  newWorkouts.value[workoutIndex].exercises.splice(exerciseIndex, 1);
};

addNewWorkout();

const createExercise = async () => {
  try {
    newWorkouts.value.forEach(
      async (workout) =>
        await axios.post('http://localhost:5000/workout', workout)
    );
  } catch (error) {
    console.log('Ocorreu um erro ao criar este exercício', error);
  }
  router.push({ name: 'home' });
};

const getAllExercises = async () => {
  try {
    const { data } = await axios.get('http://localhost:5000/exercise-all');
    exerciseList.value = data;
  } catch (error) {
    console.log(
      'Ocorreu um erro ao obter a lista de exercícios disponíveis',
      error
    );
  }
};
getAllExercises();
</script>

<template>
  <div>
    <PageHeader>Adicionar treino</PageHeader>

    <div class="new-workouts-wrapper">
      <div
        class="new-workout-card"
        v-for="(workout, workoutIndex) in newWorkouts"
        :key="workoutIndex"
      >
        <div class="new-workout-card--header">
          <div class="d-flex justify-space-between align-center">
            <input
              type="text"
              class="new-workout--name"
              placeholder="Clique aqui e insira o treino"
              v-model="workout.name"
            />
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn
                  class="mt-4"
                  color="#2C2C2C"
                  icon="mdi-dots-vertical"
                  v-bind="props"
                  size="x-small"
                  theme="dark"
                  elevation="0"
                ></v-btn>
              </template>

              <v-list theme="dark">
                <v-list-item @click="deleteWorkout(workoutIndex)">
                  <v-list-item-title>Apagar</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <textarea
            type="text"
            class="new-workout--description"
            placeholder="Observações sobre o treino"
            v-model="workout.description"
          />
        </div>

        <div class="new-workout-card--exercises">
          <v-row
            v-for="(exercise, exerciseIndex) in workout.exercises"
            :key="exerciseIndex"
          >
            <v-col cols="6" class="pt-0">
              <label for="exercise">Exercício</label>
              <v-autocomplete
                id="exercise"
                :items="exerciseList"
                item-title="name"
                item-value="name"
                v-model="exercise.name"
                density="comfortable"
                variant="outlined"
                hide-details
              ></v-autocomplete>
            </v-col>

            <v-col cols="6" class="pt-0">
              <label for="exercise">Séries</label>
              <v-text-field
                id="sets"
                density="comfortable"
                variant="outlined"
                hide-details
                append-icon="mdi-delete"
                v-model="exercise.sets"
                @click:append="deleteExercise(exerciseIndex, workoutIndex)"
              ></v-text-field>
            </v-col>
          </v-row>

          <div class="btn-add-set" @click="addExercisesInWorkout(workoutIndex)">
            <span>+ Nova série</span>
          </div>
        </div>
      </div>

      <div class="btn-add-workout" @click="addNewWorkout()">
        <span>Adicionar treino</span>
      </div>

      <div class="fixed-button--block">
        <v-btn block color="#E1B12C" theme="dark" @click="createExercise()"
          >Salvar</v-btn
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.new-workout-card {
  background-color: #2c2c2c;
  padding: 0 25px;
  border-radius: 8px;
  margin-bottom: 20px;

  &--header {
    display: flex;
    flex-direction: column;
    // justify-content: space-between;

    input,
    textarea {
      outline: none;
      min-width: 20rem;
    }

    .new-workout {
      &--name {
        color: #fff;
        font-size: 1.1em;
        font-weight: 500;

        margin-top: 20px;
      }

      &--description {
        color: #d6c9c9;
        font-size: 0.9em;
        font-weight: 400;
      }
    }
  }
  .btn-add-set {
    text-align: center;
    font-size: 0.9em;
    padding: 10px 0;
    cursor: pointer;

    margin-top: 24px;
  }
}
.btn-add-workout {
  text-align: center;
  font-size: 0.9em;
  padding: 10px 0;
  cursor: pointer;

  margin-top: 24px;
  margin-bottom: 90px;
}
</style>
