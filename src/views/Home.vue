<template>
  <div id="container">
    <Map></Map>
  </div>
</template>

<script>
import Map from '@/components/Map.vue'

export default {
  name: "Home",
  components: {
    Map: Map
  },
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
  #container {
    padding-right: 50px;
    padding-left: 50px;
  }
</style>