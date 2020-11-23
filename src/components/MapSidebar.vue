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
      <b-calendar v-model="date" :min="minDate" :start-weekday="startDay" :max="maxDate"  v-on:selected="displayTimeSlots()" locale="en-us"></b-calendar>
      <div id="timeContainer" v-if="timeSlots" class="container">
        <b-button @click="openModal(date,Object.keys(time)[0])" v-for="(time, index) in timeSlots" :key="index" class="timeButton" :disabled=checkIfAvailable(time)>{{Object.keys(time)[0]}}</b-button>
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
    let nextYearDate = new Date()
    nextYearDate.setFullYear(nextYearDate.getFullYear() + 1)
    return {
      date: '',
      minDate: new Date(Date.now()),
      maxDate: nextYearDate,
      startDay: 1,
      sidebarCheck: false,
      timeSlots: [],
      bookingCheck: false
    }
  },
  watch: {
    'selectedClinic': {
      deep: true,
      handler() {
        this.timeSlots = []
        if (this.clinicAvailability && this.date) {
          this.displayTimeSlots()
        }

      }
    }
  },
  computed: {
    selectedClinic(){
      return this.$store.state.selected.selected
    },
    clinicAvailability(){
      return this.$store.state.selected.selected.availablity
    },
    openingHours() {
      return this.selectedClinic.openinghours ? this.$store.state.selected.selected.openinghours : 'Not Available';
    }
  },
  methods: {
    displayTimeSlots() {
      if (this.clinicAvailability && this.date) {
        for (let i = 0; i < this.clinicAvailability.length; i += 1) {
          let tempSlots = this.clinicAvailability[i];
          if (tempSlots[this.date] !== undefined ){
            this.timeSlots = tempSlots[this.date];
          }
          else {
            this.timeSlots = [];
          }
        }
      }
    },
    openModal(date, time) {
      this.$refs.BookingModal.show(date, time)
    },
    showSidebar(){
      this.sidebarCheck = true
    },
    checkIfAvailable(time) {
      let valuesArray = Object.values(time);
      return valuesArray[0]
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