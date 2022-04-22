<template>
  <div v-if="event">
    <h3>{{ event.organizer }}</h3>
    <p>{{ event.description }}</p>
    <h5>{{ event.location }}</h5>
    <p>@{{ event.time }} <strong>on</strong> {{ event.date }}</p>
  </div>
</template>

<script>
export default {
  props: ["event"],
};
</script>

<style>
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
