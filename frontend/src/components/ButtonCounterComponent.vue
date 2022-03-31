<template>
    <div class="buttons">
        <button @click="$store.dispatch('decreaseCounter')">-</button>
        <button @click="$store.dispatch('increaseCounter')">+</button>
    </div>
</template>

<script>
export default {
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode
      },
      set(newColorValue) {
        this.$store.dispatch('setColorCode', newColorValue)
      },
    }
  },
}
</script>

<style>

</style>