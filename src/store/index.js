import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';


Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    username: 'lalala'
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    }
  },

  plugins: [createPersistedState()]


});