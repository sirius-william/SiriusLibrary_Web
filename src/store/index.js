import { createStore } from 'vuex'

export default createStore({
  state: {
    identification: 0,
    token: ""
  },
  mutations: {
    setToken(state, token){
      state.token = token;
    }
  },
  actions: {
  },
  modules: {
  }
})
