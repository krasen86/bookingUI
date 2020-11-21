<template>
  <div>
    <BookingModal ref="BookingModal"></BookingModal>
    <b-sidebar v-model="sidebarCheck" id="sidebar-variant" width="40%"  bg-variant="light" text-variant="dark" shadow>
      <b-container class="container-fluid">
        <h2>{{selectedClinic.name}}</h2>
        <b-row>
          <div id="clinicInfo" class="col-5">
            <p>Owner: {{selectedClinic.owner}}</p>
            <p>Address: {{selectedClinic.address}}</p>
            <p>City: {{selectedClinic.city}}</p>
          </div>
          <div id="clinicSchedule" class="col-5">
            <OpeningHours v-bind:opening-hours="openingHours"/>
          </div>
      </b-row>
      <b-calendar v-model="date" :min="minDate" :start-weekday="startDay" v-on:selected="timeButtons()" locale="en-us"></b-calendar>
      <div id="timeContainer" class="container">
        <b-button @click="openModal(date)" class="timeButton" v-if="timeVisibility">19:30-20:00</b-button>
      </div>
      </b-container>
  </b-sidebar>
  </div>
</template>

<script>
import BookingModal from '@/components/BookingModal'
import OpeningHours from "./OpeningHours";

export default {
  name: "MapSidebar",
  components: {
    OpeningHours,
    BookingModal: BookingModal
  },
  data() {
    return {
      date: '',
      minDate: new Date(Date.now()),
      startDay: 1,
      timeVisibility: false,
      sidebarCheck: false,
      bookingCheck: false
    }
  },
  computed: {
    selectedClinic(){
      return this.$store.state.selected.selected
    },
    openingHours() {
      return this.selectedClinic.openinghours ? this.$store.state.selected.selected.openinghours : 'Not Available';
    }
  },
  methods: {
    timeButtons() {
      this.timeVisibility = true
    },
    openModal(date) {
      this.$refs.BookingModal.show(date)
    },
    showSidebar(){
      this.sidebarCheck = true
    }
  }
}
</script>

<style scoped>
  #clinicInfo {
    text-align: left;
    margin-left: 1em;
    margin-top: 2em;
  }
  #clinicSchedule {
    text-align: right;
    margin-top: 2em;
  }
  h2 {
    text-align: left;
    margin-left: 0.5em;
  }
  .timeButton {
    margin: 1em;
  }
  #timeContainer {
    text-align: left;
  }


</style>