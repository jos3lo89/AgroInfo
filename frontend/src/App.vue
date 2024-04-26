<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>

  <!-- 

    aqui poner el layout mas  header  
   -->
  <header>
    <RouterLink :to="{ name: 'home' }">HOME</RouterLink>
    <RouterLink :to="{ name: 'login' }">LOGIN</RouterLink>
  </header>
  <RouterView> </RouterView>
</template>

<style scoped></style>
