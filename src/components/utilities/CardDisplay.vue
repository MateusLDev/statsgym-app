<script setup lang="ts">
import { defineProps } from 'vue';

interface ICardProps {
  type: string;
  identificator: string | null;
  workout: string;
  information: string;
}

const props = defineProps<ICardProps>();
</script>

<template>
  <div class="card-display card-display--medium">
    <img
      src="../../assets/teste.jpg"
      alt="Workout image"
      class="card-display-image"
    />

    <div class="card-display-description">
      <div class="identificator">{{ props.identificator }}</div>
      <h1 class="workout-name">{{ props.workout }}</h1>
      <div class="information">{{ props.information }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-display {
  background-color: #2c2c2c;
  border-radius: 8px;
  padding: 13px;
  display: flex;
  // margin-bottom: 16px;

  &--large {
    height: 7.1em;

    img {
      height: 87px;
      width: 87px;
    }
  }

  &--medium {
    height: 5.6em;

    img {
      height: 66px;
      width: 66px;
    }
  }

  &--small {
    height: 4.5em;

    img {
      height: 47px;
      width: 47px;
    }
  }

  &-image {
    border-radius: 8px;
    object-fit: cover;
    margin-right: 20px;
  }

  .card-display-description {
    .identificator {
      font-size: 0.6em;
      font-weight: 300;
      color: #d6c9c9;
    }
    .workout-name {
      font-size: 1em;
      color: #ffffff;
    }

    .information {
      font-size: 0.6em;
      font-weight: 400;
      color: #d6c9c9;
    }
  }
}
</style>
