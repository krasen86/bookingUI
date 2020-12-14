<template>
  <div>
    <MapAvailabilityPicker/>
    <button @click="markerAvailability">BUTTON</button>
    <div id="mapContainer">
  </div>
  </div>
</template>

<script>
  import 'leaflet/dist/leaflet.css'
  import L, {Icon} from 'leaflet'
  import MapAvailabilityPicker from "@/components/MapAvailabilityPicker";

  export default {
  name: "Map",
    components: {
      MapAvailabilityPicker
    },
    data() {
    return {
      myMap: Map,
      markerGroup: {}
    }
  },
  computed: {
    clinics() {
      return this.$store.state.dentist;
    }
  },
  watch: {
    'clinics': {
      deep: true,
      handler() {
        this.setDentistMarkers();
      }
    }
  },
  mounted() {
    this.initiateMap();
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
      // create a marker group for all markers in order to be able to refresh the markers on the map
      this.markerGroup = L.layerGroup().addTo(this.myMap);
    },
    setDentistMarkers() {
      let clinicList = this.clinics.dentists;
      this.markerGroup.clearLayers();
      for ( let i = 0; i < clinicList.length; i++) {
        let latitude = clinicList[i].coordinate.latitude;
        let longitude = clinicList[i].coordinate.longitude;
        let marker = L.marker([ longitude, latitude],{id: clinicList[i].id}).addTo(this.markerGroup).on('click', (e) => {
              console.log(e.latlng);
              this.$parent.initSidebar();
          if (this.$store.state.selected.selected.id !== undefined) {
            this.$store.dispatch('selected/removeClinic', this.$store.state.selected.selected.id);
          }
          this.$store.dispatch('selected/selectClinic', clinicList[i]);
        }
        );
        
        marker.bindPopup(clinicList[i].name);
        marker.on('mouseover',  () => {
          marker.openPopup();
        });
      }
    },
    markerAvailability() {
      this.markerGroup.getLayers().find((e) => {
        if(e.options.id === 1){
          console.log(e.getLatLng().lat)
          console.log(e.getLatLng().lng)
          e.setLatLng([57.707619, 11.869388]).update()
        }
      })
    }
  }
}
</script>

<style scoped>
  #mapContainer {
    min-height: 85vh;
  }
</style>