<template>
  <div id="container">
    <div id="mapContainer"></div>
  </div>
</template>

<script>
  import 'leaflet/dist/leaflet.css'
  import L from 'leaflet'
export default {
  name: "Map",
  data() {
    return {
      mymap: Map
    }
  },
  mounted() {
    this.initiateMap()
    this.setDentistMarkers()
  },
  methods: {
    initiateMap() {
      this.mymap = L.map('mapContainer').setView([57.7089, 11.9746], 12);

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZWVtaWxndXNlIiwiYSI6ImNraG44czlpazBkZGUyc2wxYXRmdDNzd3IifQ.X7rb29PK55Oi8EZ8XQ6jtw'
      }).addTo(this.mymap);
    },
    setDentistMarkers() {

    }
  }
}
</script>

<style scoped>
  #mapContainer {
    min-width: 500px;
    min-height: 700px;
  }
</style>