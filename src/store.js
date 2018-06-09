import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        name: "Todo 1",
        done: false
      },
      {
        name: "Todo 2",
        done: false
      }
    ]
  },
  mutations: {
    
  },
  actions: {

  },
});
