<script setup>
import languages from "../data/cars.json";
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <h1>Home View</h1>
    <div class="cars">
      <RouterLink
        :to="`/language/${language.id}`"
        v-for="language in languages"
        :key="language.id"
        href=""
        >{{ language.language }}</RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
.cars a {
  margin-left: 10px;
  color: black;
  width: 100%;
}
</style>
