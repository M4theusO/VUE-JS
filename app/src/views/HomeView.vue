<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="updateUser()">
      Atualizar perfil
    </button>
    <HelloWorld user="" msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
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
      this.$store.commit('storeUser', newUser)
    }
  }
}
</script>
