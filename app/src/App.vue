<template>
  <div>
<!--
    <PAI> -> props
      <FILHO>
      emit - event <- <NETO></NETO>
      </FILHO>
    </PAI>
-->  
      <BaseAlert v-if="showAlert" :variant="variant" @close="onClose()" >
        {{text}}
      </BaseAlert>
    
  </div>
 
</template>

<script>
import BaseAlert from './components/BaseAlert.vue';
export default {
  name: 'App',
  components: {
    BaseAlert
},
  data(){
    return{
      showAlert: true,
      variant: 'success',
      text: 'Seu formulário foi enviado com sucesso!',
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
    onClose(){
      this.showAlert = false
      console.log('on Close')
    }
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
