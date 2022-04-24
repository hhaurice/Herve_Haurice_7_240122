<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <!--
  <div class v-for="post in posts" :key="post.message">
    <p>{{ post.message }}</p>
  </div>
  -->
  <ul>
    <li v-for="post in posts" :key="post">{{ post.message }} <br>{{ post.tag }}</li>
  </ul>
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

