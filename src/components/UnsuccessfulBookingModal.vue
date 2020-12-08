<template>
  <div>
    <b-modal
        v-model="showModal"
        title="Unsuccessful Booking"
        ok-only
        ok-variant="danger"
        @hidden="modalClosed()"
    >
      <p>Your booking at {{selectedClinic.name}} on the {{getRequestDate.date}} at {{getRequestDate.time}} was unsuccessful!</p>
      <p>Please try again!</p>
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
        return this.status === 'unsuccessfulBookingReceived'
      },
      //setter
      set: function() {
      }
    },
    getRequestDate(){
      let date = this.booking.request.time;
      let requestDate = {};
      requestDate.date = ''
      requestDate.time = '';
      if (date) {
        date = date?.split(" ")
        requestDate.date = date[0];
        requestDate.time = date[1];
      }


     return requestDate
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