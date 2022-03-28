<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ user.data }}
  </div>
</template>

<script>

import axios from 'axios'

export default {

  el: '#about',
  data() {
    return {
      user: "null",
    }
  },
  mounted() {
    axios.get('http://localhost:3000/login/1') 
      .then(response => this.user = response) 
      .then (response => console.log(response.data))

    }
};

</script>

