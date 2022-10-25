<template>
  <AppProduct/>
  {{ name }}
  <img @click="changeName()" alt="Vue Logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to your Vue.js App"></HelloWorld>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import AppProduct from './components/Products/AppProduct.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    AppProduct
  },
  setup(){
    //logica cabulosa
    let name = 'Matheus'

    const changeName = () => {
      alert('Chegooou')
      name = 'Matheus Oliveira'
    }
    return{
      name,
      changeName
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
