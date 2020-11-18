<template>
  <div>
    <p>Hello guys</p>
    <div v-for="dentist in dentists" :key="dentist.id">{{ dentist.name }}</div>
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      dentists: []
    }
  },
  computed: {
    getDentists() {
      return this.setDentists();
    }
  },
  methods: {
    setDentists() {
      this.dentists = this.$store.state.dentist.dentists.dentists;
      console.log(this.dentists)
      return this.dentists;
    }
  }
}
</script>

<style scoped>

</style>