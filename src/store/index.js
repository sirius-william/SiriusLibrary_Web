import { createStore } from 'vuex'

export default createStore({
  state: {
    identification: 0,
    token: "",
    userName: "",
    id: 0
  },
  mutations: {

    setToken(state, token){
      state.token = token;
    },
    setUserName(state, userName){
      state.userName = userName;
    },
    logout(state){
      state.token = "";
      state.userName = "";
      state.identification = 0;
      state.id = 0;
    },
    setIdentification(state, identification){
      state.identification = identification;
    },
    setId(state, id){
      state.id = id
    }
  },
  actions: {
  },
  modules: {
  }
})
