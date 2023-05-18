<script setup lang="ts">
import { useRouter } from 'vue-router';
import BackButton from './BackButton.vue';

const router = useRouter();
</script>

<template>
  <div class="d-flex align-center">
    <BackButton @click="router.go(-1)" />
    <h2 class="page-header"><slot></slot></h2>
  </div>
</template>
