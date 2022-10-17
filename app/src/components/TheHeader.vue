<template>
  <header class="header">
    Header
  </header>
</template>

<script>
export default {
  beforeUnmount(){
    // Destruir as nossas libs
    // Eventos
    // Listeners
    console.log('beforeUnmount')
  },
  unmounted(){
    console.log('unmounted')
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .header{
    background-color: #000;
    color: #fff;
  }
</style>
