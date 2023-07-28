<template>
 <div class="containerTop">
     <div>
       <img width="70" heigth="70"  src="public/assets/Logo.png">
     </div>
  <menuToggle />
 </div>
  
</template>


<script>
import menuToggle from "@/components/menu.vue"
export default {
    name: "navegacao",
    data() {
      return {
       
      }
    },

  components: {
    menuToggle
  },


}
</script>

<style >
  
.containerTop {
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  background-color: #171717;
  align-items: center;
}



.ItemNav {
  color: white;
  text-decoration: none;
  padding: 5px;
  border-bottom: 1px solid #6B2FA7;
}



@media screen and (max-width: 768px) {
  .containerControls {
    display: none;
  }
}


  
</style>