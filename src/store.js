import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        name: "Créer une todo",
        done: false
      },
      {
        name: "Tester mon application",
        done: false
      }
    ]
  },
  getters: {
    todoList: state => state.todos,
    todoLength : state => state.todos.length
  },
  mutations: {
    pushTodo: (state, { name }) => {
      state.todos.push({
        name,
        done: false
      })
    },
    editTodo: (state, { key }) => {
      state.todos[key].name = prompt('Changer la todo :', state.todos[key].name)
    },
    deleteTodo: (state, { key }) => {
      state.todos.splice(key, 1);
    }
  },
  actions: {

  },
});
