<template>
    <div>
        <p>Monday: {{this.openingHours.monday || "Closed"}}</p>
        <p>Tuesday: {{this.openingHours.tuesday || "Closed"}}</p>
        <p>Wednesday: {{this.openingHours.wednesday || "Closed"}}</p>
        <p>Thursday: {{this.openingHours.thursday || "Closed"}}</p>
        <p>Friday: {{ this.openingHours.friday || "Closed"}}</p>
        <p>Saturday: {{this.openingHours.saturday || "Closed"}}</p>
        <p>Sunday: {{this.openingHours.sunday || "Closed"}}</p>
    </div>
</template>

<script>
    export default {
        name: "OpeningHours",
        props: ['openingHours']
    }
</script>

<style scoped>

</style>