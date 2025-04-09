import {
  createRouter,
  createWebHistory
} from 'vue-router';

const routes = [{
  name: 'Home',
  path: '/',
  component: () => import('../views/HomePage.vue'),
  meta: {
    title: 'Get Started'
  }
},
  {
    name: 'Todos',
    path: '/my_todo_list',
    component: () => import('../views/MyTodos.vue'),
    meta: {
      title: 'My Todos'
    }
  }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router