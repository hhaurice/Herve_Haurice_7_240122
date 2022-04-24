<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div class v-if="posts">
    <p>{{ posts }}</p>
  </div>
</template>

<script>

import axios from 'axios'

export default {

  data () {
    return  {
      posts:  {}
    }
  },
  mounted () {
    
    axios.get('http://localhost:3000/auth/posts', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }
    ) 
      .then( response => { 
        console.log(response)
        this.posts = response.data
        console.log(response.data)
        }) 
      .catch (error => error)
    }
};

</script>

