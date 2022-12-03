import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/employees',
      name: 'employees',
      component: () => import('../views/EmployeesView.vue'),
    },
    {
      path: '/employees/create',
      name: 'create-employee',
      component: () => import('../views/CreateEmployeeView.vue'),
    },
  ],
});

export default router;
