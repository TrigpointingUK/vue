<template>
  <div class="trig spinner-border text-success" role="status" v-if="loading">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="trig" v-if="!loading">
    <TrigDetails
      :trigid="trigid"
      :name="name"
      :waypoint="waypoint"
      description="Blank"
    />
    <div>
      <router-link :to="prevlink">prev={{ trigid - 1 }}</router-link>
      <router-link :to="nextlink">next={{ trigid + 1 }}</router-link>
    </div>
    <p>API response {{ response }}</p>
  </div>
</template>

<script lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import { defineComponent } from 'vue'
import TrigDetails from '@/components/TrigDetails.vue'
import axios from 'axios'

export default defineComponent({
  name: 'trig',

  components: {
    TrigDetails,
  },

  props: {
    trigid: {
      type: Number,
      default: 42,
    },
  },

  data() {
    return {
      name: '',
      response: '',
      loading: true,
      authloading: useAuth0().isLoading,
    }
  },

  computed: {
    waypoint() {
      var strNum: string = this.trigid?.toString() ?? ''
      while (strNum.length < 4) strNum = '0' + strNum
      return 'WP' + strNum
    },
    nextlink(): string {
      return '/trig/' + ((this.trigid || 0) + 1)
    },
    prevlink(): string {
      return '/trig/' + ((this.trigid || 0) - 1)
    },
  },

  created() {
    // fetch the data when the view is created
    this.fetchData()
  },

  watch: {
    // call again the method if the route changes
    $route: 'fetchData',
    authloading: 'fetchData',
  },

  methods: {
    async fetchData() {
      this.name = '<loading>'
      this.loading = true
      console.log('loading trig ' + this.$route.params.trigid)
      const trigid = this.$route.params.trigid
      if (trigid && !this.authloading) {
        try {
          // Get the access token from the auth wrapper
          const token = await this.$auth0.getAccessTokenSilently()
          const response = await axios.get(
            `${process.env.VUE_APP_TUK_API}/trigs/${trigid}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          )
          this.name = response.data.name
          this.response = JSON.stringify(response)
        } catch (error) {
          this.name = 'Error!'
          console.log(error)
        } finally {
          this.loading = false
        }
      }
    },
  },
})
</script>
