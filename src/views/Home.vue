<template>
  <div id="container">
    <ConfirmationModal></ConfirmationModal>
    <MapSidebar ref="MapSidebar"></MapSidebar>
    <Map></Map>
  </div>
</template>

<script>
import Map from '@/components/Map.vue'
import MapSidebar from '@/components/MapSidebar'
import ConfirmationModal from '@/components/ConfirmationModal'

export default {
  name: "Home",
  components: {
    Map: Map,
    MapSidebar: MapSidebar,
    ConfirmationModal: ConfirmationModal
  },
  methods: {
    initSidebar() {
      this.$refs.MapSidebar.showSidebar()
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