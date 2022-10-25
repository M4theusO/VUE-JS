import { createStore } from 'vuex'

export default createStore({
  state: {
    //Só para leitura
    user: {
      first_name: 'John',
      last_name: 'Snow',
      email: 'john@snow.com'
    }, 
    products: [
      {
        id: 1,
        name: 'Bola',
        price: 100
      },
      {
        id: 2,
        name: 'Chuteira',
        price: 200
      },
      {
        id: 3,
        name: 'Meião',
        price: 50
      }
    ],
    cart: [],
  },
  //como se fosse as computeds
  getters: {
    total(state){
      return state.cart.reduce((total, item) => total += item.price, 0)
    }
  },
  //Commit para disparar as funções da mutations
  mutations: {
    storeUser(state, data){
      state.user = data
  },
  addProduct(state, data){
    state.cart.push(data)
  },
  removeProduct(state, id){
    const idx = state.cart.findIndex(o => o.id === id)
    state.cart.splice(idx, 1);
  }
},
//Performar promessa dentro do vuex
  actions: {
    storeUser({commit}, data){
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('storeUser', data);
          resolve()
        }, 3000)
      })
    }
  },
  modules: {
  }
})
