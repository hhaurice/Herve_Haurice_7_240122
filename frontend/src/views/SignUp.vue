<template>
  <div class="signup">
    <h1>Create an account</h1>
    <p>
    <input type="text" placeholder="firstName" v-model="state.firstName" />
    <span v-if="v$.firstName.$error">{{ v$.firstName.$errors[0].$message }}</span>
    </p>
    <p>
    <input type="text" placeholder="lastName" v-model="state.lastName" />
    <span v-if="v$.lastName.$error">{{ v$.lastName.$errors[0].$message }}</span>
    </p>
    <p>
    <input type="email" placeholder="email" v-model="state.email" />
    <span v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
    </p>
    <p>
    <input type="password" placeholder="password" v-model="state.password" />
    <span v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</span>
    </p>
    <button @click="submitForm">Submit</button>
  </div>
</template>

<script>

import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

import { reactive, computed } from 'vue' 

import axios from 'axios'

export default {

setup () {

    const state = reactive({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
    })
    const rules = computed(() => {
        return {
            firstName: { required },
            lastName: { required },
            email: { required, email },
            password: { required, minLength: minLength(8) },
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
        axios.post('http://localhost:3000/signup', this.state) 
        .then( response => console.log(response))
        .catch( error => ({ error }));
        this.$router.push('/login');

        }
    },
}

</script>



