import {createRouter, createWebHistory} from "vue-router";

import Home from '../pages/Home.vue'
import BlogList from '../pages/BlogList.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Post from "@/pages/Post.vue";
import PageNotFound from "@/pages/PageNotFound.vue";

import { routes as admin } from "@/admin/router/index";
import { useAuthStore } from '@/store/auth';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/blogs',
        name: 'BlogList',
        component: BlogList
    },
    {
        path: '/post/:id',
        name: 'Post',
        component: Post,
        props: true
  },
        {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },

    ...admin,
    
    {
        path: '/:pathMatch(.*)*',
        component: PageNotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach(async (to, from, next) => {

  // Применяем проверку только к маршрутам, начинающимся с '/admin'
  // if (to.path.startsWith('/admin'))
    if (to.path.startsWith('/admin') && to.path !== '/admin/authorization') {
    const authStore = useAuthStore();
    const token = localStorage.getItem('token');

    // Проверка токена пользователя с ожиданием результата
    try {
      const isAuthenticated = await authStore.checkUser(token);

      if (isAuthenticated) {
        next(); // Продолжить навигацию
      } else {
        next({ name: 'Authorization' }); // Перенаправить на главную страницу
      }
    } catch (error) {
      console.error("Ошибка проверки пользователя:", error);
      next({ name: 'Authorization' }); // В случае ошибки также перенаправляем на главную
    }
  } else {
    next(); // Для всех остальных маршрутов продолжаем навигацию без проверки
  }
});

export default router