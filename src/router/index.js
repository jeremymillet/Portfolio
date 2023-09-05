import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AllWork from '../views/AllWork.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Acceuil',
      component: Home
    },
    {
      path: '/Projets',
      name: 'Projets',
      component: AllWork
    },
  ]
})
router.beforeEach((to, from, next) => {
  // Avant chaque navigation, faites défiler la page vers le haut
  window.scrollTo(0, 0);
  next();
});

export default router
