<template>
  <div id="app">
    <Navigation></Navigation>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato&display=swap");
@import url("https://fonts.googleapis.com/css?family=Raleway:300&display=swap");

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Raleway", sans-serif;
}

p {
  font-family: "Lato", sans-serif;
}

#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
nav {
  margin-top: 50px;
}

.nav-link {
  color: black;
}

.nav-link:hover {
  color: #0077b5;
}
.nav-heading {
  display: block;
  font-size: 14px;
  letter-spacing: 1px;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

<script>
import Navigation from "./components/Home/Navigation";
export default {
  name: "app",
  components: {
    Navigation: Navigation,
  },
};
</script>
