<script setup lang="ts">
import { ref } from 'vue';
import CardDisplay from '../components/utilities/CardDisplay.vue';
import axios from 'axios';
import ExercisesListData from '../services/workouts.json'

import IExercisesList from '../types/exercises';

let exerciseList = ref<IExercisesList[]>([]);

exerciseList.value = ExercisesListData

const getExerciseArea = (area: string | undefined) => {
  if (area === 'chest') return 'Peito';
  if (area === 'back') return 'Costas';
  if (area === 'biceps') return 'Bíceps';
  if (area === 'triceps') return 'Triceps';
  if (area === 'forearms') return 'Antebraço';
  if (area === 'shoulders') return 'Ombros';
  if (area === 'legs') return 'Pernas';
  return 'Pantutilhas';
};
</script>

<template>
  <!-- talvez criar um englobador e so passar como slot o card com o v-for, ja que o estilo é o mesmo -->
  <div class="exercises-wrapper">
    <CardDisplay
      v-for="(exercise, index) in exerciseList"
      :key="index"
      :identificator="null"
      :workout="exercise.name"
      :information="getExerciseArea(exercise.category)"
      type="medium"
    />
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
</style>
