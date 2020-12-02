<template>
  <div>
    <b-modal v-model="showModal" id="modal-1" size="lg" title="Confirm Booking" hide-footer>
      <div class="container">
        <p>{{selectedClinic.name}}</p>
        <p>{{selectedClinic.address}}</p>
        <p>{{date}}</p>
        <p>{{time}}</p>
      </div>
      <ValidationObserver v-slot="{ invalid }">
        <form class="form-styling" @submit.prevent="onConfirm">
          <!-- Name -->
          <ValidationProvider name="name" rules="required|alpha" v-slot="{ errors }">
            <div class="form-group">
              <label for="name">Name</label>
              <input name="name" id="name" type="text" class="form-control" v-model="name"/>
              <div  v-if="errors[0]" class="alert-danger">{{ errors[0] }}</div>
            </div>
          </ValidationProvider>
          <!-- Email -->
          <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
            <div class="form-group">
              <label for="email">Email</label>
              <input name="email" id="email" type="email" class="form-control" v-model="email"/>
              <div  v-if="errors[0]" class="alert-danger">{{ errors[0] }}</div>
            </div>
          </ValidationProvider>
          <!-- Phone -->
          <ValidationProvider name="phone" rules="required|alpha_num" v-slot="{ errors }">
            <div class="form-group">
              <label for="phone">Phone</label>
              <input name ="phone" id="phone" type="text" class="form-control" v-model="phone"/>
              <div v-if="errors[0]" class="alert-danger"> {{ errors[0] }}</div>
            </div>
          </ValidationProvider>
          <!-- Button -->
          <div class="footer">
            <b-button @click="hide()" type="primary" class="button-styling">Cancel</b-button>
            <b-button variant="info" type="submit" :disabled="invalid" class="button-styling">Confirm</b-button>
          </div>
        </form>
      </ValidationObserver>

    </b-modal>
  </div>
</template>

<script>

  import Publisher from '../services/publisher';
  import Subscriber from "../services/subscriber";
  import BookingGenerator from "../services/bookingGenerator";
  import {variables} from "../config/variables"

export default {
  name: "BookingModal",
  data() {
    return {
      showModal: false,
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
    }
  },
  computed: {
    selectedClinic() {
      return this.$store.state.selected.selected
    }
  },
  methods: {
    show(date, time) {
      this.showModal = true
      this.date = date
      this.time = time
    },
    hide() {
      this.showModal = false
    },
    onConfirm(){
      let bookingGenerator = new BookingGenerator()
      let publisher = new Publisher()
      let subscriber = new Subscriber()
      let request = bookingGenerator.createRequest(this.selectedClinic, this.date, this.time)
      publisher.publishBookingRequest(request)
      subscriber.subscribeToTopic(variables.RESPONSE_TOPIC + '/' + request.userid)
      this.hide()
    },

  }
}
</script>

<style scoped>

</style>