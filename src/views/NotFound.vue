<template>
  <h2>Oopps!</h2>
  <p>{{ resource }} not found!</p>
  <p>
    Go to home page clicking
    <router-link :to="{ name: 'home' }">here</router-link>
  </p>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: "page",
    },
  },
};
</script>
