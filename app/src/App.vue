<template>
  {{ name }} <br><br>

  <h5>User</h5>
  {{ user.first_name }}
  {{ user.last_name }}
  <br><br>
  <h5>Admin</h5>
  {{ admin.first_name }}
  {{ admin.last_name }}
  <br><br>
  <img @click="changeName()" alt="Vue Logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to your Vue.js App"></HelloWorld>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import { ref, reactive } from 'vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  setup(){
    const user = reactive({
      first_name: 'John',
      last_name: 'Snow'
    });

    const admin = ref({
      first_name: 'Admin',
      last_name: 'Master'
    });

    const count = ref('test')
    console.log(count)

    //logica cabulosa
    let name = 'Matheus'

    const changeName = () => {
      alert('Chegooou')
      name = 'Matheus Oliveira'
      user.first_name = 'Sansa'
      admin.value.first_name = 'XXXX'
    }
    return{
      user,
      admin,
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
