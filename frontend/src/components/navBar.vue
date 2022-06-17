<template>
    <div class="navbar">
        <router-link to="/posts"><img src="../assets/icon-left-font.png"></router-link>
        <div class="profile-section">
            <div class="profile"><font-awesome-icon :icon="['fas', 'circle-user']" /><span class="profile-name">Bukayo</span></div>
            <div class="dropdown">
                <font-awesome-icon @click="showMenu" :icon="['fa', 'caret-down']" />
                <div v-show="dropdownMenu" class="dropdown-content">
                <router-link to="#">Voir Votre profil</router-link>
                <router-link to="#">Paramètres du Compte</router-link>
                <router-link to="/">Se déconnecter</router-link>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref } from "vue";

export default {
    components: {
        FontAwesomeIcon
    },
    setup() {
        const dropdownMenu = ref(false);

        const showMenu = () => {
            dropdownMenu.value = !dropdownMenu.value;
        };
        
        return { showMenu, dropdownMenu };

    },
}

</script>



<style scoped>

img {
    height: 128px;
}

.navbar {

    display: flex;
    justify-content: space-between;
    overflow: hidden;
    height: 128px;

}

.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.profile-section {
    display: flex;
    justify-content: space-around;
    width: 20%;
}

.profile {
    display: flex;
    align-items: center;
    padding: 10px;
}

.profile-name {
    font-weight: 600;
    padding: 10px;
}


.dropdown {
    display: flex;
    width: 10%;
    justify-content: center;
    align-items: center;
}

.dropdown-content {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    margin-top: 180px;
    margin-right: 20px;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {background-color: #f7d6d6;}

svg {
    font-size: 24px;
    color: #f7d6d6;
    cursor: pointer;
}
</style>

