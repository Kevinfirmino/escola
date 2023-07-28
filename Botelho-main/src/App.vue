<template>
  <navegacao />
  <router-view/>
  <rodape />
</template>

<script>


import navegacao from "@/components/navegacao.vue"
import rodape from "@/components/rodape.vue"
 export default {
    name: "App",
    components: {
      navegacao,
      rodape
      
    }
  }
</script>



<style global>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&display=swap');
  
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    text-decoration: none;
  }

  body {
    background: #D8CEF6;
  }
</style>
