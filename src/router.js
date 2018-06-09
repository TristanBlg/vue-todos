import Vue from 'vue';
import Router from 'vue-router';
import TodoList from './views/TodoList.vue';
// import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todo',
      component: TodoList,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About,
    // },
  ],
});
