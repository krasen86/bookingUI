<template>
  <div id="mapContainer"></div>
</template>

<script>
  import 'leaflet/dist/leaflet.css'
  import L, {Icon} from 'leaflet'
export default {
  name: "Map",
  data() {
    return {
      myMap: Map
    }
  },
  mounted() {
    this.initiateMap()
    this.setDentistMarkers()

    /* Setup to make markers show */
    delete Icon.Default.prototype._getIconUrl;
    Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    });

  },
  methods: {
    initiateMap() {
      this.myMap = L.map('mapContainer').setView([57.7089, 11.9746], 12);

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZWVtaWxndXNlIiwiYSI6ImNraG44czlpazBkZGUyc2wxYXRmdDNzd3IifQ.X7rb29PK55Oi8EZ8XQ6jtw'
      }).addTo(this.myMap);

      L.marker([57.7089, 11.9746], {Icon: L.Icon.default}).addTo(this.myMap);
    },
    setDentistMarkers() {
    }
  }
}
</script>

<style scoped>
  #mapContainer {
    min-height: 85vh;
  }
</style>