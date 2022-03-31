<template>
    <p class="msg">{{ $store.state.msg }}</p>
    <counter />
    <counter-squared />
    <counter-buttons />
    <color-code />
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    'counter': require('@/components/CounterComponent.vue').default,
    'counter-squared': require('@/components/CounterSquaredComponent.vue').default,
    'counter-buttons': require('@/components/ButtonCounterComponent.vue').default,
    'color-code': require('@/components/ColorCodeComponent.vue').default
  }
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

