<template>
<<<<<<< HEAD
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

=======
  <h1>Hello World</h1>
  <subscription-form/>
</template>

<script>

import subscriptionForm from './components/suscriptionForm.vue'

export default {
  name: "App",
  components: {
    subscriptionForm,
  },
};
</script>

>>>>>>> main
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
<<<<<<< HEAD
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
=======
  margin-top: 60px;
>>>>>>> main
}
</style>
