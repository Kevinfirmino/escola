<template>
  <div>
    <table>
    <tr>
      <td> seg </td>
      <td> ter </td>
      <td>qua</td>
      <td>qui</td>
      <td>sex</td>
    </tr>
    
    <tr>
      <td>
        <ul>
           <li>
            carne
          </li>
          <li>
            carne
          </li>
        </ul>
      </td>

       <td>
        <ul>
           <li>
            carne
          </li>
          <li>
            carne
          </li>
        </ul>
      </td>

       <td>
        <ul>
           <li>
            carne
          </li>
          <li>
            carne
          </li>
        </ul>
      </td>

       <td>
        <ul>
         <li>
            carne
          </li>
          <li>
            carne
          </li>
        </ul>
      </td>

       <td>
        <ul>
          <li>
            carne
          </li>
          <li>
            carne
          </li>
        </ul>
      </td>
    </tr>
  </table>
  </div>
</template>


<script>
export default {
    name: "cardapioItem",
    data() {
      return {
        title: "cardapio"
      }
    }
}
</script>

<style scoped>

  div {
    margin-top: 110px;
  }
  
  table {
    width: 90%;
    border-collapse: collapse;
    margin: auto;
    border: 1px solid red;
    overflow-x: auto;
  }

   td {
    border: 1px solid black;
    padding: 10px;
    width: 33.33%;
    overflow-x: auto;
  }

  li {
    list-style: none;
  }
</style>