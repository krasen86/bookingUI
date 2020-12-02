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
export default {
  name: "ConfirmationModal",
  data(){
  return {
    bookingMessage: "Your booking has been made!"
  }},
  methods: {
    modalClosed() {
      this.$store.dispatch('booking/changeBookingStatus', 'viewed')
    }
  },
  computed: {
    showModal: {
      // getter
      get: function () {
        return this.$store.getters["booking/getBookingStatus"] === 'received';
      },
      //setter
      set: function() {
      }
    }
  },

}
</script>

<style scoped>

</style>