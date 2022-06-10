<template>
      <div class="app-container">
    <div class="app-brand">
      <img src="../assets/icon-above-font.png">
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
</template>

<style src="@/assets/styles/home.css"></style>