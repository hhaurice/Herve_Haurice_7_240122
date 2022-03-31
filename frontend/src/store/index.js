import { createStore } from 'vuex'

export default createStore({
  state: {
    msg: "Je rêve, ça marche pour de vrai???",
    counter: 0
  },
  getters: {
  },
  mutations: {
    decreaseCounter(state) {
      state.counter--
    },
    increaseCounter(state) {
      state.counter++
    }
  },
  actions: {
  },
  modules: {
  }
})
