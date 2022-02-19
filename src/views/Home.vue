<template>
  <div class="row">
    <div class="col col-12 col-md-3">
      <img :src="logo" width="150" height="124" border="0" alt="T:UK logo" />
    </div>
    <div class="col col-12 col-md-9">
      <h1>{{ sitename }}</h1>
      <p id="welcome">
        Welcome! This site is the testbed for developing the next generation of
        the TrigpointingUK codebase. If you are interested in trigpointing,
        please visit the public
        <a href="http://trigpointing.uk">TrigpointingUK</a>
        website.
      </p>
      <p>We hope you find TrigpointingUK both useful and fun.</p>
      <hr class="mx-auto" width="50%" />
    </div>
  </div>

  <div class="row d-flex flex-md-row-reverse">
    <div class="col col-12 col-md-9">
      <home-messages />
      <hr class="mx-auto" width="50%" />
      <home-recent-logs />
      <hr class="mx-auto" width="10%" />
      <home-content />
      <hr class="mx-auto" width="10%" />
      <hero />
      <router-link to="/about">About</router-link>
    </div>

    <div class="col col-12 col-md-3 border bg-light">
      <side-bar />
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from '@/components/SideBar.vue'
import HomeMessages from '@/components/HomeMessages.vue'
import HomeRecentLogs from '@/components/HomeRecentLogs.vue'
import HomeContent from '@/components/HomeContent.vue'
import Hero from '@/components/Hero.vue'
import { inject } from 'vue'

var logo
logo = require('../assets/' + process.env.VUE_APP_LOGO)
const sitename = inject('sitename')
</script>
