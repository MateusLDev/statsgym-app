<script setup lang="ts">
import CardDisplay from '../components/utilities/CardDisplay.vue';

import { useRouter } from 'vue-router';
const router = useRouter();

const goToNewExercise = () => router.push({ name: 'NewExercise' });
const goToViewExercise = () => router.push({ name: 'ViewExercise' });
</script>

<template>
  <!-- talvez criar um englobador e so passar como slot o card com o v-for, ja que o estilo é o mesmo -->
  <div class="exercises-wrapper">
    <CardDisplay
      :identificator="null"
      workout="Costa e Bíceps"
      information="8 exercícios - 10 a 12 reps"
      type="medium"
      @click="goToViewExercise()"
    />
    <CardDisplay
      :identificator="null"
      workout="Peito e Triceps"
      information="8 exercícios - 10 a 12 reps"
      type="medium"
    />
    <CardDisplay
      :identificator="null"
      workout="Perna completo"
      information="8 exercícios - 10 a 12 reps"
      type="medium"
    />
    <CardDisplay
      :identificator="null"
      workout="Ombros"
      information="8 exercícios - 10 a 12 reps"
      type="medium"
    />
    <CardDisplay
      :identificator="null"
      workout="Bíceps e Triceps"
      information="8 exercícios - 10 a 12 reps"
      type="medium"
    />
  </div>

  <div class="no-content">
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
