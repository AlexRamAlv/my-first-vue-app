<template>
  <div class="event-container">
    <EventList v-for="event in Events" :key="event.id" :event="event" />
  </div>
  <div class="pagination">
    <router-link
      id="page-prev"
      :to="{ name: 'home', query: { page: page - 1 } }"
      rel="prev"
      v-if="page != 1"
    >
      &#60; Previous
    </router-link>
    <!-- the result can be the same using an expression -->
    <!-- v-if="page < totalEvents / 2" -->
    <router-link
      id="page-next"
      :to="{ name: 'home', query: { page: page + 1 } }"
      rel="next"
      v-if="hasNext"
    >
      Next &#62;
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import EventList from "@/components/EventList.vue";
import serviceEvent from "../services/ServiceEvent";
import { watchEffect } from "vue";

export default {
  name: "HomeView",
  components: {
    EventList,
  },
  props: ["page"],
  data() {
    return {
      Events: [],
      totalEvents: 0,
    };
  },
  created() {
    watchEffect(() => {
      this.Events = null;
      serviceEvent
        .getEvents(this.page, 2)
        .then((res) => {
          this.Events = res.data;
          this.totalEvents = res.headers["x-total-count"];
        })
        .catch(() => this.$router.push({ name: "NetworkError" }));
    });
  },
  computed: {
    hasNext() {
      const totalPages = Math.ceil(this.totalEvents / 2);
      return this.page < totalPages;
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  width: 290px;
  margin: auto;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
