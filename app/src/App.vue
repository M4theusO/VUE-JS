<template>
  <div>
    <TheHeader v-if="showHeader"/>
    <h1>Hello World</h1><br>
    <input v-model="name" type="text">
    {{ name }} <br>

    <button @click="showHeader = !showHeader">
      Ativar e Desativar header
    </button>
  </div>
 
</template>

<script>
import TheHeader from './components/TheHeader'
export default {
  name: 'App',
  components: {
    TheHeader
  },
  data(){
    return{
      name: 'Matheus',
      showHeader: true
    }
  },
  // Criação
    // Preparar o componente
    // Ajax, inicializar algumas variáveis
    // Não tem acesso ao DOM
  //Montagem
    // Inicializar um lib externa (new Lib())
    // Precisa de acesso ao template (DOM)
    // Tem acesso ao template (DOM)
  // Atualização
    // Debug
    // Update
  // Desmontagem
    // Remover tudo o que for necessário (lib->destroy())
    // para liberar memória

  //HOOKS
  //beforeUpdate(){
  //console.log('beforeUpdate')
  //},
  //updated() {
  //  console.log('updated')
  //},
  //beforeCreate(){
  //  console.log('beforeCreate')
  //},
  //created(){
  //  console.log('created')
  //},
  //beforeMount(){
  //  console.log('beforeMount')
  //},
  //mounted(){
  //  console.log('mounted')
  //},
  //beforeUnmount(){
  // console.log('beforeUnmount')
  //},
  //unmounted(){
  //  console.log('unmounted')
  //},

  watch: {

  },
  computed: {

  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
