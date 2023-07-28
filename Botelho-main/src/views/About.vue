<template>
  <div>
    <img class="banner" src="https://cdn.discordapp.com/attachments/971488669074616343/1119269649406763133/302151734_759455168601166_3383694749307627804_n.png">
  </div>
      <h2 class="sobre">SOBRE</h2>
  <div class="container">
    <p>Bem-vindo à Escola Dr. Paulo Octávio Botelho!

Nós, na Escola Dr. Paulo Octávio Botelho, temos o compromisso de fornecer uma educação de qualidade e uma experiência enriquecedora para cada um de nossos alunos. Acreditamos que a educação é a chave para o desenvolvimento pessoal, o sucesso acadêmico e a formação de cidadãos conscientes e responsáveis.

Nossa escola é reconhecida por sua excelência acadêmica e por oferecer um ambiente seguro, inclusivo e acolhedor para todos. Nossos educadores altamente qualificados são apaixonados pelo ensino e estão empenhados em ajudar os alunos a atingirem seu máximo potencial.

Oferecemos um currículo abrangente que abrange todas as áreas do conhecimento, desde as disciplinas fundamentais até as atividades extracurriculares. Nosso objetivo é fornecer uma educação holística, que estimule o desenvolvimento intelectual, emocional, social e físico dos nossos alunos.

Na Escola Dr. Paulo Octávio Botelho, acreditamos na importância da colaboração entre alunos, pais e educadores. Valorizamos a parceria com as famílias para criar um ambiente de aprendizagem enriquecedor e para apoiar o crescimento e o desenvolvimento de cada aluno.

Além disso, estamos comprometidos em promover valores como respeito, ética, responsabilidade e tolerância em nossa comunidade escolar. Acreditamos na formação de cidadãos conscientes, que estejam preparados para enfrentar os desafios do mundo moderno e contribuir para uma sociedade melhor.

Nossa infraestrutura é moderna e proporciona um ambiente propício para o aprendizado. Temos laboratórios bem equipados, biblioteca, salas de aula tecnologicamente avançadas e espaços de convivência que incentivam a interação e a criatividade dos alunos.

Na Escola Dr. Paulo Octávio Botelho, o aprendizado vai além da sala de aula. Oferecemos uma ampla variedade de atividades extracurriculares, como esportes, artes, música e projetos comunitários, que permitem aos alunos explorarem seus interesses e talentos individuais.

Estamos orgulhosos de sermos uma escola que valoriza a excelência acadêmica, o desenvolvimento pessoal e a formação de cidadãos conscientes. Se você está em busca de uma educação de qualidade e de um ambiente de aprendizagem inspirador, a Escola Dr. Paulo Octávio Botelho é o lugar certo para você.

Venha fazer parte da nossa comunidade escolar e prepare-se para uma jornada de descobertas, crescimento e sucesso.

Bem-vindo à Escola Dr. Paulo Octávio Botelho!</p>
  </div>
</template>

<script>
export default {
    name: "AboutItem",
  
}
</script>

<style scoped>
  .banner {
    position: relative;
    width: 100%;
    heigth: 400px;
  }

  .sobre {
   text-align: center;
  }

  .container {
     padding: 30px;
    margin: auto;
    width: 900px;
  }

 

    @media screen and (max-width: 920px) {
  .container {
     padding: 30px;
    width: 700px;
  }
}

   @media screen and (max-width: 768px) {
  .container {
    padding: 30px;
    width: 300px;
  }
}
</style>