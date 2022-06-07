<template>
  <div class="app-container">
    <div class="app-brand">
      <img src="./assets/icon-above-font.png">
    </div>
    <div class="menu">
      <h1>Communiquez et partagez votre quotidien avec vos collègues</h1>
      <div class="menu-signup">
        <h2>Rejoignez la communauté dès aujourd'hui.</h2>
        <router-link to="/signup"><button>S'inscrire</button></router-link>
      </div>
      <div class="menu-login">
        <h2>Vous avez déjà un compte?</h2>
        <router-link to="/login"><button>Se connecter</button></router-link> 
      </div>
    </div>
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-container {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.menu {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 20px;
}

h1 {
  font-size: 50px;
  font-weight: 800;
  line-height: 60px;
}

button {
    text-transform: uppercase;
    background: #4CAF50;
    width: 200px;
    padding: 15px;
    border-radius: 20px;
    color: #FFFFFF;
    transition: all 0.3 ease;
    cursor: pointer;
}

button:hover {
  transition-duration: 500ms;
  background: #27802a;
}

img {
  border-right: solid 1px #F7D6D6;
}

</style>
