<template>
  <b-modal v-model="showModal" title="Confirmation Receipt" ok-only ok-variant="info">
    <p>{{bookingMessage}}</p>
    <div>
      <p>Clinic:</p>
      <p>Clinic Address:</p>
      <p>Date:</p>
      <p>Time:</p>
      <p>Reference:</p>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "ConfirmationModal",
  data(){
  return {
    showModal: false,
    bookingMessage: "Your booking has been made!"
  }},
  methods: {
  }
}
</script>

<style scoped>

</style>