import { createStore } from "vuex";

export default createStore({
  state: {
    userLogin: false
  },
  mutations: {
    loginSuccess(){
      this.state.userLogin = true
    }
  },
  actions: {},
  modules: {}
});
