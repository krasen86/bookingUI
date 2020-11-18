<template>
  <div>
    <b-button class="buttontest" v-b-toggle.sidebar-variant>Toggle</b-button>
    <b-sidebar id="sidebar-variant" width="45em"  bg-variant="light" text-variant="dark" shadow>
      <b-container class="container-fluid">
        <h2>Epic clinic</h2>
        <b-row>
          <div id="clinicInfo" class="col-5">
            <p>Owner</p>
            <p>Adress</p>
            <p>Phone</p>
          </div>
          <div id="clinicSchedule" class="col-5">
            <p>Monday: 9:00-19:00</p>
            <p>Tuesday: 9:00-19:00</p>
            <p>Wednesday: 9:00-19:00</p>
            <p>Thursday: 9:00-19:00</p>
            <p>Friday: 9:00-19:00</p>
            <p>Saturday: Closed</p>
            <p>Sunday: Closed</p>
          </div>
      </b-row>
      <b-calendar v-model="value" :min="minDate" :start-weekday="startDay" v-on:selected="timeButtons()" ></b-calendar>
      <div id="timeContainer" class="container">
        <b-button class ="timeButton" v-if="timeVisibility">19:30-20:00</b-button>
        <b-button class ="timeButton" v-if="timeVisibility">19:30-20:00</b-button>
        <b-button class ="timeButton" v-if="timeVisibility">19:30-20:00</b-button>
        <b-button class ="timeButton" v-if="timeVisibility">19:30-20:00</b-button>
        <b-button class ="timeButton" v-if="timeVisibility">19:30-20:00</b-button>
      </div>
      </b-container>
  </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "MapSidebar",
  data() {
    return {
      value: '',
      minDate: Date,
      startDay: 1,
      timeVisibility: false
    }
  },
  mounted() {
    this.getDate()
  },
  methods: {
    getDate() {
      this.minDate = new Date(Date.now())
    },
    timeButtons() {
      this.timeVisibility = true
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