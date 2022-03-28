<template>
  <div class="home">
    <h1>Home</h1>
    <div class="counter">
      {{ counter }}
    </div>
    <div class="buttons">
      <button @click="decreaseCounter">-</button>
      <button @click="increaseCounter">+</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'homeView',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter() {
      this.counter++
    },
      decreaseCounter() {
      this.counter--
    }
  },

}
</script>

<style>

.counter {
  font-size: 2rem;
}

div {
  margin: 10px;
}

button {
  margin: 10px;
  padding: 8px 32px 8px 32px;
}

</style>



