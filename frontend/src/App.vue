<template>
  <div class="nav-container">
    <nav>
      <ul class="nav-list">
        <li><router-link to="/">Accueil</router-link></li>
      </ul>
      <ul class="nav-list">
        <li><router-link to="/login">Se connecter</router-link></li>
      </ul>
          <ul class="nav-list">
        <li><router-link to="/signup">S'inscrire</router-link></li>
      </ul>
          <ul class="nav-list">
        <li><router-link to="/account">Profil</router-link></li>
      </ul>
    </nav>
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

nav {
  padding: 30px;
  display: flex;
  align-items: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.nav-container {
  display: flex;
  justify-content: flex-end;
  background-color: #f7d6d6;
}

li {
  list-style: none;
}



</style>
