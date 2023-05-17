<script setup lang="ts">
import CardDisplay from '../components/utilities/CardDisplay.vue';
</script>

<template>
  <!-- talvez criar um englobador e so passar como slot o card com o v-for, ja que o estilo é o mesmo -->
  <div class="exercises-wrapper">
    <CardDisplay
      :identificator="null"
      workout="Pernas (Quadriceps)"
      information="Pernas"
      type="medium"
    />
    <CardDisplay
      :identificator="null"
      workout="Pernas (Quadriceps)"
      information="Pernas"
      type="medium"
    />
    <CardDisplay
      :identificator="null"
      workout="Pernas (Quadriceps)"
      information="Pernas"
      type="medium"
    />
    <CardDisplay
      :identificator="null"
      workout="Pernas (Quadriceps)"
      information="Pernas"
      type="medium"
    />
    <CardDisplay
      :identificator="null"
      workout="Pernas (Quadriceps)"
      information="Pernas"
      type="medium"
    />
    <CardDisplay
      :identificator="null"
      workout="Pernas (Quadriceps)"
      information="Pernas"
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
