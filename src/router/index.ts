import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/new',
      name: 'NewExercise',
      component: () => import('../views/NewExercise.vue'),
    },
    {
      path: '/view',
      name: 'ViewExercise',
      component: () => import('../views/ViewExercise.vue'),
    },
    {
      path: '/register',
      name: 'RegisterWorkout',
      component: () => import('../views/RegisterWorkout.vue'),
    },
  ],
});

export default router;
