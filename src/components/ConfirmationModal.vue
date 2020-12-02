<template>
  <div>
  <b-modal
          v-model="showModal"
          title="Confirmation Receipt"
          ok-only
          ok-variant="info"
          @hidden="modalClosed()"
  >
    <p>{{bookingMessage}}</p>
    <div>
      <p>Clinic:</p>
      <p>Clinic Address:</p>
      <p>Date:</p>
      <p>Time:</p>
      <p>Reference:</p>
    </div>
  </b-modal>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: "ConfirmationModal",
  data(){
  return {
    bookingMessage: "Your booking has been made!",
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
    ...mapGetters({status: 'booking/getBookingStatus'}),
    showModal: {
      // getter
      get: function () {
        return this.status === 'received';
      },
      //setter
      set: function() {
      }
    }
  }
}
</script>

<style scoped>

</style>