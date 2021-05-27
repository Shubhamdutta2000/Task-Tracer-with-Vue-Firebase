<template>
  <footer>
    <p>Copyright &copy; 2021</p>
    <!-- For linking any particular route -->
    <router-link v-show="homePage" to="/about">About</router-link>
  </footer>
</template>

<script>
export default {
  name: "Footer",

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
a {
  color: #fff;
  text-decoration: none;
}
footer {
  margin-top: 50px;
  text-align: center;
  color: #fff;
}
</style>
