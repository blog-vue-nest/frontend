import {createRouter, createWebHistory} from "vue-router";

import Home from '../pages/Home.vue'
import BlogList from '../pages/BlogList.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Post from "@/pages/Post.vue";
import PageNotFound from "@/pages/PageNotFound.vue";

import AdminPanel from "@/admin/pages/AdminPanel.vue";

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
    {
        path: '/admin',
        name: 'Admin',
        component: AdminPanel
    },
    {
        path: '/:pathMatch(.*)*',
        component: PageNotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router