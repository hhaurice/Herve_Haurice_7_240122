<template>
  <div class="signup">
    <h1>Create an account</h1>
    <p>
    <input type="text" placeholder="name" v-model="state.name" />
    <span v-if="v$.name.$error">{{ v$.name.$errors[0].$message }}</span>
    </p>
    <p>
    <input type="text" placeholder="lastname" v-model="state.lastname" />
    <span v-if="v$.lastname.$error">{{ v$.lastname.$errors[0].$message }}</span>
    </p>
    <p>
    <input type="email" placeholder="email" v-model="state.email" />
    <span v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
    </p>
    <p>
    <input type="password" placeholder="password" v-model="state.password.password" />
    <span v-if="v$.password.password.$error">{{ v$.password.password.$errors[0].$message }}</span>
    </p>
    <p>
    <input type="password" placeholder="confirm password" v-model="state.password.confirm" />
    <span v-if="v$.password.confirm.$error">{{ v$.password.confirm.$errors[0].$message }}</span>
    </p>
    <button @click="submitForm">Submit</button>
  </div>
</template>

<script>

import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'

import { reactive, computed } from 'vue' 

export default {

setup () {
    const state = reactive({
            name: '',
            lastname: '',
            email: '',
            password: {
                password: '',
                confirm: '',
            }

    })
    const rules = computed(() => {
        return {
            name: { required },
            lastname: { required },
            email: { required, email },
            password: {
                password: { required, minLength: minLength(8) },
                confirm: { required, sameAs: sameAs(state.password.password) },
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
        login () {
            this.$store.dispatch("LOGIN", {
                name: this.username,
                lastname: this.lastname,
                email: this.email,
                password: this.password
            })
            .then(() => {
                this.$router.push('/')
            })
            .catch(error =>{
                console.log(error("Erreur mon pote"))
            })
        }
    },
}

</script>



