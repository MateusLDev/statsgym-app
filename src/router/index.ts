import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/welcome',
      name: 'Welcome',
      component: () => import('../views/Welcome.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Register.vue'),
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/new',
      name: 'NewExercise',
      component: () => import('../views/NewExercise.vue'),
      props: true,
    },
    {
      path: '/view/:id',
      name: 'ViewExercise',
      component: () => import('../views/ViewExercise.vue'),
    },
    {
      path: '/register/:id',
      name: 'RegisterWorkout',
      component: () => import('../views/RegisterWorkout.vue'),
      props: true,
    },
  ],
});

export default router;
