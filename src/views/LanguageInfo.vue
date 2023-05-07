<script setup>
import { useRoute } from "vue-router";
import languages from "../data/cars.json";

const route = useRoute();
const language = languages.find((l) => l.id === parseInt(route.params.id));
console.log(language);
</script>

<template>
  <div>
    <h1>Information of Language</h1>
    <h2>{{ language.info.developer }}</h2>
    <h2>{{ language.info.date }}</h2>
  </div>
</template>
s
