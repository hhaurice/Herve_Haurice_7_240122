<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="user in user.data" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios'

export default {

  el: '#about',
  data() {
    return {
      user: [],
    }
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users') 
    .then(response => this.user = response)   
    
    }
};

</script>

