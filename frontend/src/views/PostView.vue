<template>
<head>
  <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
</head>
<div class="container-postview">
  <navBar />
  <div class="container-post">
    <div class="post" v-for="post in posts" :key="post">
        <ul class="card-list">
          <li class="card">
            <img src="../assets/icon.png" class="card-profile-image">
            <div class="card-container">
              <div class="card-header">
                  <p class="card-data-username">Bukayo Saka</p><p class="card-data-timestamp">1 day ago</p>
              </div>
              <div class="card-body">{{ post.message }}</div>
              <div class="card-footer">
                <span class="card-footer-like"><font-awesome-icon :icon="['far', 'heart']" /> 3</span>
                <span class="card-footer-comment"><font-awesome-icon :icon="['far', 'comment']" /> 8</span>
              </div>
            </div>
          </li>
        </ul>
    </div>
  </div>
</div>
</template>

<script>

import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import navBar from '../components/navBar.vue'

export default {

  name: 'App',
  components : {
    FontAwesomeIcon,
    navBar
  },

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

<style src="@/assets/styles/post.css"></style>
<style src="@/assets/styles/card.css"></style>
