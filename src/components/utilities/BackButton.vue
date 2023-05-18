<script setup lang="ts"></script>

<template>
  <div class="back-button mb-3 mr-4">
    <v-icon icon="mdi-chevron-left" color="#fff" size="20"></v-icon>
  </div>
</template>

<style scoped lang="scss">
.back-button {
  background-color: #e1b12c;
  height: 20px;
  width: 20px;
  border-radius: 6px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s;

  &:hover {
    background-color: #cfa328;
  }
}
</style>
