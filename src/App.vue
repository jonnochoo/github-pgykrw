
<template>
  <div class="container">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>
<script setup>
import Navigation from './components/Navigation.vue'
</script>

<style>
.container {
  margin: auto;
  width: 1000px;
}
</style>
