<template>
  <div class="details">
    <h1>Details for {{ waypoint }}</h1>
    <p>ID: {{ trigid }}</p>
    <p>Name: {{ name }}</p>
    <p>Description: {{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TrigDetails',
  props: {
    trigid: Number,
    waypoint: String,
    name: String,
    description: String,
  },
})
</script>

<style scoped>
h1 {
  margin: 10px 0 0;
  color: #42b983;
}
p {
  color: #ff0000;
}
</style>
