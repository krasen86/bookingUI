<template>
  <div>
  <b-modal
          v-model="display"
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
    bookingMessage: "Your booking has been made!",
    display : false
  }},
  methods: {
    modalClosed() {
      this.$store.dispatch('booking/changeBookingStatus', 'viewed')
    },
    displayStatus(){
      this.display = true
    }
  },
  computed: {
    showModal: {
      // getter
      get: function () {
        return this.$store.state.booking.status;
      },
      //setter
      set: function() {
      }
    }
  },
  watch: {
    showModal: {
      handler() {
        console.log("Hello")
        if (this.$store.state.booking.status === 'received'){
          this.displayStatus()
          console.log("Hi")
        }else{
          console.log("Boo")
        }

      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style scoped>

</style>