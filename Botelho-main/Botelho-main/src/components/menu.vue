<template>
  <div>
    <button @click="toggleMenu" class="hamburger-button">
      <img class="icon" src="public/assets/hamburger.png">
    </button>
    <ul v-if="isMenuOpen" class="menu">
      <li><router-link class="ItemNav" to="/">INICIO</router-link></li>
      <li><router-link class="ItemNav" to="/about">SOBRE</router-link></li>
      <li><router-link class="ItemNav" to="/cardapio">CARDAPIO</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "menuToggle",
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style scoped>
.hamburger-button {
  display: block;
  margin: auto;
  
  width: 30px;
  height: 20px;
  cursor: pointer;
  border: none;
  background-color: transparent;
}


.menu {
  position: absolute;
  z-index: 100;
  right: 0.5px;
  top: 73px;
  list-style-type: none;
  text-align: center;
  background: #171717;
  padding: 10px;
}

.menu li {
  margin-bottom: 20px;
}

.menu li router-link {
  color: #333;
  text-decoration: none;
}

 
</style>
