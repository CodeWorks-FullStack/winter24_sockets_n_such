<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="home-card p-5 card align-items-center shadow rounded elevation-3">
      <i class="mdi mdi-lightbulb-outline fs-1" v-if="!isLightOn"></i>
      <i class="mdi mdi-lightbulb-on fs-1" v-else></i>
      <button class="bg-dark text-white p-3 rounded text-center" @click="toggleLight()">
        Toggle Light
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

export default {
  setup() {
    return {
      isLightOn: computed(() => AppState.isLightOn),
      toggleLight() {
        AppState.isLightOn = !AppState.isLightOn
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
