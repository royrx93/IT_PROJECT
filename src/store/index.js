import { createStore } from "vuex";

export default createStore({
  state: {
    userLogin: false,
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''  
  },
  mutations: {
    loginSuccess() {
      this.state.userLogin = true;
      localStorage.setItem('userLogin', true);
    },
    changeLogin(state, user) {      
      state.Authorization = user.Authorization;      
      localStorage.setItem('Authorization', user.Authorization);    
    },

  },
  actions: {},
  modules: {}
});
