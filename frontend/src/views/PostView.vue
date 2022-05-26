<template>

  <div class="post" v-for="post in posts" :key="post">
    <p>{{ post.message }} <br>{{ post.tag }} </p>
  </div>

</template>

<script>

import axios from 'axios'

export default {

  data () {
    return  {
      posts:  [
       { message: '',
        tag: ''
        }
      ]
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

