<template>
  <div>
    <b-datepicker class="datepicker" v-model="date" :start-weekday="startDay" locale="en-us" :min="minDate" :max="maxDate" @input="getDateAvailability(date)"></b-datepicker>
    <p>{{this.date}}</p>
  </div>
</template>

<script>
export default {
  name: "MapAvailabilityPicker",

  data() {
    let nextYearDate = new Date()
    nextYearDate.setFullYear(nextYearDate.getFullYear() + 1)
    let startDate = new Date()
    startDate.setDate(startDate.getDate() + 1)
    return {
      date: '',
      minDate: startDate,
      maxDate: nextYearDate,
      startDay: 1,
    }
  },
  watch: {
    dateAvailability: {
      handler() {
        console.log("This works")
      },
      deep: true,
      immediate:true
    }
  },
  computed: {
    dateAvailability() {
      return this.$store.getters["availability/getAvailability"]
    }
  },
  methods: {
    getDateAvailability(date){
      this.$store.dispatch('availability/selectDate', date)
    }
  }
}


</script>

<style scoped>
.datepicker{
  z-index: 1000;
}
</style>