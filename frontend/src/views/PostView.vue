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
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': 'Bearer '+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDk5OTIyODMsImV4cCI6MTY1MDA3ODY4M30.mOhIkGBX8gYJRK8HiA3uktxNU40paNU-_feFSqJtKfI',
            },
    }) 
      .then( response => { 
        this.posts = response.data
        console.log(response.data)
        }) 
      .catch (error => error)
    }
};

</script>

