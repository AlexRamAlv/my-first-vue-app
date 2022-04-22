<template>
  <div class="card">
    <router-link :to="{ name: 'EventDetail', params: { id: event.id } }">
      <p>@{{ event.time }} {{ event.date }}</p>
      <h2>{{ event.title }}</h2>
      <h3>{{ event.organizer }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "EventList",
  props: {
    event: {
      type: Object,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 350px;
  margin: 40px auto;
  padding: 20px 5px;
  border: solid 1px;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 7px 1px rgb(0 0 0 / 43%);
}

.time {
  display: flex;
  justify-content: space-evenly;
  width: 210px;
  margin: auto;
}
</style>
