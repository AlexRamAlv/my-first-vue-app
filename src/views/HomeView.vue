<template>
  <div class="event-container">
    <EventList v-for="event in Events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventList from "@/components/EventList.vue";
import serviceEvent from "../services/ServiceEvent";

export default {
  name: "HomeView",
  components: {
    EventList,
  },
  data() {
    return {
      Events: [],
    };
  },
  created() {
    serviceEvent
      .getEvents()
      .then((res) => (this.Events = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.event-container a {
  text-decoration: none;
  color: inherit;
}
</style>
