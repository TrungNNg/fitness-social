<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavVue from './components/Nav.vue'
import FooterVue from './components/Footer.vue'
</script>

<template>
      <NavVue />

      <div class="container">
            <RouterView />
      </div>

      <FooterVue />      
</template>

<style scoped>

</style>
