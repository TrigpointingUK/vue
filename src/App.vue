<template>
  <div id="app">
    <NavBar />
    <div class="container-xxl">
      <Error />
      <div class="mt-0">
        <router-view />
      </div>
    </div>
    <TukFooter />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import TukFooter from '@/components/TukFooter.vue'
import Error from '@/components/Error.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
