<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input data-testid="name-input" type="text" v-model="name" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
x
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
