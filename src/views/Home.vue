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
  }
}
</script>

<style scoped>
  #container {
    padding-right: 50px;
    padding-left: 50px;
  }
</style>