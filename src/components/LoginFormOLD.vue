<template>
  <div>
    <form name="myform" @submit.prevent="onSubmit">
      <input data-testid="name-input" type="text" v-model="name">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: ''
      }
    },
    methods: {
      onSubmit(e) {
        this.$emit( 'formSubmit', { name: this.name })
        // e.preventDefault()
      }
    }
  }
</script>

<style scoped>

</style>
