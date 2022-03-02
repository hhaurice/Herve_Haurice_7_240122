<template>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
