<template>
  <div class="container">
    <h1>Connectez vous à votre compte</h1>
    <form @submit.prevent="submitForm">
      <p>
      <input type="email" placeholder="email" v-model="state.email" />
      <span v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
      </p>
      <p>
      <input type="password" placeholder="mot de passe" v-model="state.password" />
      <span v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</span>
      </p>
      <button type="submit">Se connecter</button>
      <p>Pas encore inscrit? <a href="/signup">Créer un compte</a></p>
    </form>
  </div>
</template>

<script>

import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import { reactive, computed } from 'vue' 

import axios from 'axios'

export default {

setup () {
    const state = reactive({
            email: '',
            password: '',
    })
    const rules = computed(() => {
        return {
            email: { required, email },
            password: { required }
        }
    })

    const v$ = useVuelidate(rules, state)

    return { state, v$ }
  },
    methods: {
          async submitForm () {
            this.v$.$validate()
            if (!this.v$.$error) {
                alert('Form successfully submitted')
            } else {
                alert('Form failed validation')
            }
          await axios.post('http://localhost:3000/login', this.state)
        .then(response => {
          if(response.data.token) {
            localStorage.setItem('token', response.data.token)
          }
          this.$router.push('/auth/posts')
        })
        .catch( error => console.log(error))
        },
    },   
}

</script>

<style src="@/assets/styles/login.css"></style>


