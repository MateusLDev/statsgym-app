<script setup lang="ts">
import { ref, computed } from 'vue';
import CardDisplay from '../components/utilities/CardDisplay.vue';
import axios from 'axios';
import INewWorkout from '../types/newWorkouts';
import IExercisesList from '../types/exercises';

import { useRouter } from 'vue-router';
const router = useRouter();

let myWorkouts = ref<INewWorkout[]>([]);

const getMyWorkouts = async () => {
  try {
    const { data } = await axios.get('http://localhost:5000/workouts');
    myWorkouts.value = data;
  } catch (error) {
    console.log(
      'Ocorreu um erro ao obter dados dos seus exercícos cadastrados',
      error
    );
  }
};

const goToNewExercise = () => router.push({ name: 'NewExercise' });
const goToViewExercise = (workout: any) => {
  router.push({ name: 'ViewExercise', params: { id: workout.id } });
};

getMyWorkouts();
</script>

<template>
  <!-- talvez criar um englobador e so passar como slot o card com o v-for, ja que o estilo é o mesmo -->
  <div class="exercises-wrapper" v-if="myWorkouts.length">
    <CardDisplay
      v-for="(workout, index) in myWorkouts"
      :key="index"
      :identificator="null"
      :workout="workout.name"
      :information="workout.description"
      type="medium"
      @click="goToViewExercise(workout)"
    />
  </div>

  <div class="no-content" v-else>
    <p class="no-content-text">Você não possui treinos cadastrados</p>
  </div>

  <div class="fixed-button--centered">
    <v-btn
      density="default"
      color="#E1B12C"
      theme="dark"
      icon="mdi-plus"
      @click="goToNewExercise()"
    ></v-btn>
  </div>
</template>

<style scoped lang="scss">
.exercises-wrapper {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
}

.no-content {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 140%;

  height: calc(100vh - 263px);

  &-text {
    max-width: 300px;
    font-size: 1.25em;
    font-weight: 600;
  }
}
</style>
