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

    logout(){
      this.state.userLogin = false;
      localStorage.setItem('userLogin', false);
      localStorage.setItem('Authorization', '');
      //alert("logout success");
    },

    changeLogin(state, user) {      
      state.Authorization = user.Authorization;      
      localStorage.setItem('Authorization', user.Authorization);    
    },


  },
  actions: {},
  modules: {}
});
