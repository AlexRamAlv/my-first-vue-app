<template>
  <div v-if="event">
    <h2>{{ event.title }}</h2>
    <div id="nav">
      <router-link :to="{ name: 'EventDetail' }">Detail</router-link>|
      <router-link :to="{ name: 'EventRegister' }">Register</router-link>|
      <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
    </div>
    <router-view :event="event" />
  </div>
</template>

<script>
import serviceEvent from "../../services/ServiceEvent";

export default {
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  created() {
    serviceEvent
      .getEvent(this.id)
      .then((res) => (this.event = res.data))
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: "404Resource",
            params: { resource: "event" },
          });
        } else {
          this.$router.push({ name: "NetworkError" });
        }
      });
  },
};
</script>

<style>
.card a {
  text-decoration: none;
  color: inherit;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 15px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
