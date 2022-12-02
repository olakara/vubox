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
      path: '/dropdowns',
      name: 'dropdowns',
      component: () => import('../views/SampleDropdownsView.vue'),
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: () => import('../views/ConfirmDialogView.vue'),
    },
    {
        path: '/sidebar',
        name: 'sidebar',
        component: () => import('../views/SideBarView.vue'),
    },
  ],
});

export default router;
