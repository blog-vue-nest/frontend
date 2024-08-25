import {createRouter, createWebHistory} from "vue-router";

import Home from '../pages/Home.vue'
import BlogList from '../pages/BlogList.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Post from "@/pages/Post.vue";
import PageNotFound from "@/pages/PageNotFound.vue";

import { routes as admin } from "@/admin/router/index";

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

export default router