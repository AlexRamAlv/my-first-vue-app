<template>
  <div v-if="event">
    <h2>{{ event.title }}</h2>
    <h3>{{ event.organizer }}</h3>
    <h4>{{ event.description }}</h4>
    <h5>{{ event.location }}</h5>
    <p>@{{ event.time }}</p>
    <p>on {{ event.date }}</p>
  </div>
</template>

<script>
import serviceEvent from "../services/ServiceEvent";

export default {
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  created() {
    serviceEvent.getEvent(this.id).then((res) => (this.event = res.data));
  },
};
</script>

<style></style>
