<script setup>
import { useRoute, RouterView, useRouter } from "vue-router";
import languages from "../data/cars.json";

const route = useRoute();
const router = useRouter();
const paramID = parseInt(route.params.id);
const language = languages.find((l) => l.id === paramID);
console.log(paramID);
</script>

<template>
  <div v-if="language">
    <h1>Language View</h1>
    <h3>{{ language.language }}</h3>
    <h3>{{ language.from }} {{ language.type }}</h3>
    <button @click="router.push(`/language/${paramID}/information`)">
      View Info
    </button>
    <RouterView />
  </div>
  <div v-else><h1>No Programming Language</h1></div>
</template>
