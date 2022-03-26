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
import { required, email, minLength } from '@vuelidate/validators'

import { reactive, computed } from 'vue' 

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
                password: { required, minLength: minLength(8) },
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
}

</script>



