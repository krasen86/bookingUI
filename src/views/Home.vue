<template>
  <div id="container">
    <MapSidebar></MapSidebar>
    <Map></Map>
  </div>
</template>

<script>
import Map from '@/components/Map.vue'
import MapSidebar from '@/components/MapSidebar'

export default {
  name: "Home",
  components: {
    Map: Map,
    MapSidebar: MapSidebar
  }
}
</script>

<style scoped>
  #container {
    padding-right: 50px;
    padding-left: 50px;
  }
</style>