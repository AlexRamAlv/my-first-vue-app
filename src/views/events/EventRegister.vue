<template>
  <p>Register view</p>
  <button @click.prevent="register">Register</button>
</template>

<script>
export default {
  props: ["event"],
  inject: ["GStore"],
  methods: {
    register() {
      this.GStore.flashMessage = `You have been suscribed to the event ${this.event.title}`;
      setTimeout(() => {
        this.GStore.flashMessage = "";
      }, 3000);
      // Supposing registration was successfully
      this.$router.push({ name: "EventDetail" });
    },
  },
};
</script>
