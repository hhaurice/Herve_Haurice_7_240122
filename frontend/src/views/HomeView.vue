<template>
    <p class="msg">{{ $store.state.msg }}</p>
    <div class="counter">{{ $store.state.counter }}</div>
    <div class="buttons">
      <button @click="$store.commit('decreaseCounter')">-</button>
      <button @click="$store.commit('increaseCounter')">+</button>
    </div>
</template>

<script>


export default {
  name: 'HomeView',
}

</script>

<style>
div {
  margin-bottom: 10px;
}

.counter {
  font-size: 80px;
}

.buttons button {
  padding: 8px 32px 8px 32px;
}
</style>

