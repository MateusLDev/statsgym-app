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

router.beforeEach((to, _, next) => {
  const isFirstLogin = localStorage.getItem('isFirstLogin')
  const isLogged = localStorage.getItem('isLogged')
  const notInAuthorizedRoute = to.name !== 'Welcome' && to.name !== 'Login' && to.name !== 'Register'

  if(isFirstLogin && JSON.parse(isFirstLogin) === true && notInAuthorizedRoute) {
    next({ name: 'Welcome' })
    return;
  }

  if((!isLogged || JSON.parse(isLogged) === false) && notInAuthorizedRoute) {
    next({ name: 'Welcome' })
    return;
  }

  if(isLogged && JSON.parse(isLogged) === true && !notInAuthorizedRoute) {
    next({name: 'Home'})
    return;
  }

  next();
})

export default router;
