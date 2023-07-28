<template>
  
 <section class="contentNews">
   <div>
   <img class="moreNews" src="https://cdn.discordapp.com/attachments/971488669074616343/1118200874351726693/c083b1c3-7b83-4bf4-823a-d344adfd7a50.png">
   <h4 class="news">festa junina do botelho</h4>
   </div>

   <div>
   <img class="moreNews" src="https://cdn.discordapp.com/attachments/971488669074616343/1118202889513467934/a94673cb-8921-4e85-b8c2-bed03e5b07e8.png">
   <h4 class="news">diversão para os menores</h4>
   </div>

   <div>
   <img  class="moreNews" src="https://cdn.discordapp.com/attachments/971488669074616343/1118212230417223840/bdd731b4-77d0-4fb7-9dd7-86b601fb2334.png">
   <h4 class="news">pratica de exercicios</h4>
   </div>

    <div>
   <img class="moreNews" src="https://cdn.discordapp.com/attachments/971488669074616343/1118212560139866143/7891b736-a306-4eab-9693-94c38bce8479.png">
   <h4 class="news">estimulando a criatividade dos alunos</h4>
   </div>

 </section>


  <article class="caurousel">
    <h1 class="titles">Veja alguns projetos</h1>
    <div>
      <button @click="prevSlide" class="prev">
         <img class="arrows" style="width: 30px; height: 30px; background: white;" src="public/assets/avanco-rapido-left.png">
      </button>
         <div class="content-images">
             <img class="imagem" src="https://cdn.discordapp.com/attachments/971488669074616343/1118193605421576212/a32fdd55-ade5-4413-ba4e-1aa3a01d21be.png">
         </div>
       <button @click="nextSlide" class="next">
           <img class="arrows" style="width: 30px; height: 30px; background: white;" src="public/assets/avanco-rapido.png">
       </button>
    </div>
   
  </article>
</template>

<script>
import Icon from '@/components/icon.vue'
  
export default {
  name: "posts",
  data() {
    return {
      prevIndex: 0,
      nextIndex:  0,
      arrayImage: [
        "https://cdn.discordapp.com/attachments/971488669074616343/1118193605421576212/a32fdd55-ade5-4413-ba4e-1aa3a01d21be.png",
        "https://cdn.discordapp.com/attachments/971488669074616343/1118193824867557527/e5c36125-d054-4775-ac28-fc8a67c9241a.png", 
        "https://cdn.discordapp.com/attachments/971488669074616343/1118194116237459548/1247cfd3-1cf0-4216-b8f2-15af2fc2bc3c.png"
        
      ],
      
    }
  },

  components: {
    Icon
  },
  
  methods: {
   prevSlide() {
     const sliderCaurousel = document.querySelector(".imagem")
    this.arrayImage.forEach((item , index)=>{
      if(sliderCaurousel.getAttribute("src") == item)
        if(index != 0)
           this.prevIndex = index-1;
        else
          this.prevIndex = this.arrayImage.length-1;
      });
     sliderCaurousel.setAttribute("src",this.arrayImage[this.prevIndex]);  
},

  nextSlide() {
     const sliderCaurousel = document.querySelector(".imagem")
      this.arrayImage.forEach((item , index)=>{
        if(sliderCaurousel.getAttribute("src") == item)
          if(index !=this.arrayImage.length-1)
            this.nextIndex = index+1;
          else
           this.nextIndex = 0;
        });
       sliderCaurousel.setAttribute("src",this.arrayImage[this.nextIndex]);  
    }
  }
}
</script>

<style scoped> 

  .contentNews {
    margin: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .contentNews div {
    padding: 10px;
    text-align: center;
  }

  .caurousel {
    margin-top: 60px;
    padding: 15px;
    position: relative;
    width: 100%;
  }

  .caurousel .next {
    position: absolute;
    background: none;
    border: none;
    top: 50%;
    right: 15px;
 
   
  }

  .caurousel .prev {
    position: absolute;
    background: none;
    border: none;
    top: 50%;
    left: 15px;
   
  }

  .caurousel img {
    width: 100%;
    height: 600px;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    .caurousel img {
      height: 400px;
      object-fit: cover;
    }
  }

  .titles {
    text-align: center;
    padding: 10px;
    margin: 20px;
    color: #3e004d;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .news {
    margin-top: 10px;
    text-transform: uppercase;
    color: #3e004d;
    cursor: pointer;
    text-decoration: none;
  }

  router-link {
    text-decoration: none;
  }

 .moreNews {
   object-fit:cover;
   width: 200px;
   height: 300px;
 }
</style>

