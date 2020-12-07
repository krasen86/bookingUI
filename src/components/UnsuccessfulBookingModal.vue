<template>
  <div>
    <b-modal
        v-model="showModal"
        title="Unsuccessful Booking"
        ok-only
        ok-variant="danger"
        @hidden="modalClosed()"
    >
      <p>Your booking at {{selectedClinic.name}} at {{displayInfo.time}} was unsuccessful!</p>
    </b-modal>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: "UnsuccessfulBookingModal",
  data(){
    return {
      display : false
    }},
  methods: {
    modalClosed() {
      this.$store.dispatch('booking/changeBookingStatus', 'viewed')
    },
    displayStatus(){
      this.display = !this.display
    }
  },
  computed: {
    ...mapGetters({status: 'booking/getBookingStatus', booking : 'booking/getBooking'}),
    showModal: {
      // getter
      get: function () {
        return true; //return this.status === 'received'
      },
      //setter
      set: function() {
      }
    },
    displayInfo(){
      return this.booking.response;
    },
    selectedClinic : {
      get: function () {
        return this.booking.request.dentistid ? this.getClinics.dentists.find(item => item.id === this.booking.request.dentistid) : ""
      }
    },
    getClinics(){
      return this.$store.state.dentist
    }
  }
}
</script>

<style scoped>

</style>