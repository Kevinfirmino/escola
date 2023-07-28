<template>
  <posts />
</template>

<script> 
import posts from "@/components/posts.vue"


export default {
  name: "Home",
  components: {
    posts
  }
}
</script>


<style>
  .Tech {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .Tech div {
    margin: 10px
  }

  .Tech img {
    width: 600px;
    heigth: 400px;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    .Tech img {
      width: 100%;
      heigth: 400px;
    }
  }

  .titleTech {
    margin-top: 60px;
    padding-bottom: 30px;
    text-align: center;
    color: #3e004d;
    font-weight: 900;
  }
</style>