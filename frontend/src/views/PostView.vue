<template>
<!--
  <div class="post" v-for="post in posts" :key="post">
    <p>{{ post.message }} <br>{{ post.tag }} </p>
  </div>
-->
<head>
  <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
</head>
<div class="container">
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
              <span class="card__footer__like"><font-awesome-icon :icon="['far', 'heart']" /></span>
              <span class="card__footer__comment"><font-awesome-icon :icon="['far', 'comment']" /></span>
            </div>
          </div>
        </li>
      </ul>
  </div>
</div>
</template>

<script>

import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {

  name: 'App',
  components : {
    FontAwesomeIcon
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

<style src="@/assets/styles/card.css"></style>
