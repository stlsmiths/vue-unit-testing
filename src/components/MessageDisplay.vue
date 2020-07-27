<template>
  <p v-if="error" data-testid="message-error">{{ error }}</p>
  <p v-else-if="message.text" data-testid="message">{{ message.text }}</p>
</template>

<script>
import {getMessage} from "../services/axios";

export default {
    data() {
      return {
        message: {},
        error: null
      }
    },

    async created() {
      try{
        this.message = await getMessage()
      } catch (err) {
        this.error = 'Oopps, something went wrong!'
      }
    }
  }
</script>

<style scoped>

</style>
