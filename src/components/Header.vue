<template>
  <header>
    <h1>{{ title }}</h1>
    <!-- 
      Use btn-click event listener &
      Emit toggle-form event for adding new task
     if current route is in home route then only show this Button
    -->
    <Button
      v-show="homePage"
      @btn-click="$emit('toggle-form')"
      :text="showForm ? 'Hide Form' : 'Show Form'"
      :color="showForm ? '#ff1d1d ' : '#0078d7'"
    />
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",
  props: {
    title: String,
    showForm: Boolean,
  },
  components: {
    Button,
  },

  // for reactivity
  computed: {
    // for checking that if the current route is "/" or not
    homePage() {
      if (this.$route.path === "/") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  color: #fff;
}
</style>
