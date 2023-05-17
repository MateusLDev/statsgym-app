<script setup lang="ts">
import { defineProps, computed } from 'vue';

interface IButtonProps {
  primary: string;
}

const props = defineProps<IButtonProps>();

const type = computed(() => {
  return props.type === 'primary' ? '#E1B12C' : '#121212';
});
</script>

<template>
  <v-btn elevation="0" :color="type">
    <slot></slot>
  </v-btn>
</template>
