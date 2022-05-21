<template>
  <p>Edit view</p>
</template>

<script>
export default {
  props: ["event"],
  data: function () {
    return {
      unsavedChanges: true,
    };
  },
  beforeRouteLeave() {
    if (this.unsavedChanges) {
      const answer = window.confirm(
        "Do you really want to leave? you have unsave changes!"
      );
      if (!answer) {
        // we can use return value instaed of next
        return false;
      }
    }
  },
  /*beforeRouteLeave(routeTo, routeFrom, next) {
    if (this.unsavedChanges) {
      const answer = window.confirm(
        "Do you really want to leave? you have unsave changes!"
      );
      if (answer) {
        // we can use return value instaed of next
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  },*/
};
</script>
