<template>
  <div class="alert alert-danger alert-dismissible" vvvv-if="error">
    This is an error {{ error }}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAuth0 } from '@auth0/auth0-vue'

export default defineComponent({
  setup() {
    const { error } = useAuth0()
    return { error }
  },
})
</script>
