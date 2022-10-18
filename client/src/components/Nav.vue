<script setup lang="ts">
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  import session,{logout} from '../stores/session.js';
  import router from '@/router'
  let isActive = ref(false);

  function redirect() {
    logout()
    router.push({name:"home"})
  }
</script>

<template>
<nav class="navbar" role="navigation" aria-label="main navigation">

  <div class="navbar-brand">
    <router-link class="navbar-item padding-left" to="/">
        <img src="../assets/logo.png">
    </router-link>

    <a :class="{ 'is-active': isActive }" @click="isActive = !isActive" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isActive }">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">
        Home
      </router-link>
      <router-link to="/about" class="navbar-item">
        About
      </router-link>
    </div>

    <div v-if="!session.user" class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/signup" class="button is-primary">
            <strong>Sign up</strong>
          </router-link>
          <router-link to="/login" class="button is-light">
            Log in
          </router-link>
        </div>
      </div>
    </div>

      <div v-if="session.user" class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <button class="button is-light" @click="redirect();">Logout</button>
          </div>
        </div>
      </div>

  </div>
</nav>

</template>

<style>

</style>