<script setup lang="ts">
import { RouterView } from 'vue-router';

if(!localStorage.getItem('isFirstLogin')) {
  localStorage.setItem('isFirstLogin', 'true')
}
</script>

<template>
  <!-- <v-container> -->
    <RouterView />
  <!-- </v-container> -->
</template>

<style scoped>
.v-btn__content {
  text-transform: none !important;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
