<template>
  <div>
    <div class="container">
      <!-- toggle-form event listener -->
      <Header
        @toggle-form="toggleForm"
        :showForm="showForm"
        title="Task Tracker"
      />
      <!-- Pass showForm props to router view component (needed in Home route) -->
      <router-view :showForm="showForm"> </router-view>
      <Footer />
    </div>
    <p class="footer-credit">Made with 💙 by Shubham Dutta</p>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },

  data() {
    return {
      showForm: false,
    };
  },

  methods: {
    // toggle form (for viewing form onclick)
    toggleForm() {
      this.showForm = !this.showForm;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  color: #fff;
  font-family: "Poppins", sans-serif;
  background: #333;
}
.container {
  position: relative;
  max-width: 600px;
  margin: 50px auto;
  overflow: auto;
  min-height: 400px;
  border: 3px solid rgb(255, 255, 255);
  padding: 30px;
  border-radius: 5px;
  box-shadow: 50px 10px 50px 10px rgba(73, 73, 73, 0.1),
    -30px 0px 40px rgba(88, 86, 86, 0.15);
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
.footer-credit {
  margin-bottom: 200px;
  text-align: center;
  color: #fff;
}
</style>
