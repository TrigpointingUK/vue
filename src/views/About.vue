<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>Environment: {{ environment }}</div>
    <div>Version: {{ version }}</div>
    <div>Build date: {{ build_date }}</div>
    <div>Tag: {{ tag }}</div>
  </div>
</template>

<script setup lang="ts">
const environment = process.env.VUE_APP_SITE || 'Undefined'
const build_date = process.env.VUE_APP_BUILD_DATE || 'Local development'
const version = process.env.VUE_APP_VERSION || 'Local development'
const tag = process.env.VUE_APP_SHA1 || 'Local development'
</script>
