import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    msg: "Je rêve, ça marche pour de vrai???",
    counter: 0,
    colorCode: 'green'
  },
  mutations: {
    decreaseCounter(state, randomNumber) {
      state.counter -= randomNumber
      console.log(randomNumber)
    },
    increaseCounter(state, randomNumber) {
      state.counter += randomNumber
      console.log(randomNumber)
    },
    setColorCode(state, newColorValue) {
      state.colorCode = newColorValue
    }
  },
  actions: {
    increaseCounter({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response =>{
        commit('increaseCounter', response.data)
      })
    },
    decreaseCounter({ commit }) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response =>{
      commit('decreaseCounter', response.data)
      })
    },
    setColorCode({commit }, newColorValue) {
      commit('setColorCode', newColorValue)
    }
  },
  getters: {
    counterSquared (state) {
      return state.counter * state.counter
    }
  },
  modules: {
  }
})
