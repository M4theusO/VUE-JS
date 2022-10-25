<template>
  {{ $store.getters.total }}
  <AppProducts />
  <br><br>
  <br><br>
  <pre>
    {{ $store.state.cart }}
  </pre>

  <br><br>
  {{ $store.state.user.first_name }} {{ $store.state.user.last_name }} <br>
  <button @click="updateUser()">Atualizar perfil</button>
  <br>
</template>

<script>
import AppProducts from '@/components/Products/AppProducts.vue'

export default {
  name: 'App',
  components: {
    AppProducts
  },
  data() {
    return {

    }
  },
  methods: {
    updateUser() {
      const newUser = {
        first_name: 'Matheus',
        last_name: 'Oliveira',
        email: 'matheus@oliveira.com'
      }
      //this.$store.commit('storeUser', newUser)
      this.$store.dispatch('storeUser', newUser).then(() => {
        console.log('Terminou com sucesso!');
      })
    }
  },
  created() {

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
