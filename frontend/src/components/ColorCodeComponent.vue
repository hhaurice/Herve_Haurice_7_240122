<template>
    <div>
        <input v-model="colorCode" placeholder="Enter color code" type="text">
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