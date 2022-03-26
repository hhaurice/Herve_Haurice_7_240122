<template>
  <div class="signup">
    <h1>Create an account</h1>
    <p>
    <input type="text" placeholder="name" v-model="name" />
    </p>
    <p>
    <input type="text" placeholder="lastname" v-model="lastname" />
    </p>
    <p>
    <input type="password" placeholder="password" v-model="password.password" />
    </p>
    <p>
    <input type="password" placeholder="confirm password" v-model="password.confirm" />
    </p>
    <button @click="submitForm">Submit</button>
  </div>
</template>

<script>

import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
    data () {
        return {
            name: '',
            lastname: '',
            email: '',
            password: {
                password: '',
                confirm: '',
            }
        }
    },
    methods: {
        submitForm () {
            alert('Form successfully submitted')
        }
    },
}

</script>



