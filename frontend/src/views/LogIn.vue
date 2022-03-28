<template>
  <div class="login">
    <h1>Log in now</h1>
    <p>
    <input type="email" placeholder="email" v-model="state.email" />
    <span v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
    </p>
    <p>
    <input type="password" placeholder="password" v-model="state.password.password" />
    <span v-if="v$.password.password.$error">{{ v$.password.password.$errors[0].$message }}</span>
    </p>
    <button @click="submitForm">Submit</button>
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
            password: {
                password: '',
            }

    })
    const rules = computed(() => {
        return {
            email: { required, email },
            password: {
                password: { required },
            },
        }
    })

    const v$ = useVuelidate(rules, state)

    return { state, v$ }
  },
    methods: {
        submitForm () {
            this.v$.$validate()
            if (!this.v$.$error) {
                alert('Form successfully submitted')
            } else {
                alert('Form failed validation')
            }
        },
    },
      el: 'login',
  data() {
    return {
      user: [],
    }
  },
  mounted() {
    axios.post('http://localhost:3000/login', {
        "email": '',
        "password": '',
    }) 
   .then(response => this.user = response)  // A garder pour si je veux afficher le nom de l'utilisateur connecté ou du token ou ce que j'ai posté
  //      .then( response => console.log(response))
        .catch( error => console.log(error))
    
    }
}

</script>


