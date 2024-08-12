import {createRouter, createWebHistory} from "vue-router";

import Home from '../pages/Home.vue'
import BlogList from '../pages/BlogList.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'

const routes = [
    {
        path: '/',
        name: Home,
        component: Home
    },
    {
        path: '/blogs',
        name: BlogList,
        component: BlogList
    },
    // {
    //     path: '/products/:id',
    //     name: Product,
    //     component: Product,
    //     props: true
  // },
        {
        path: '/about',
        name: About,
        component: About
    },
    {
        path: '/contact',
        name: Contact,
        component: Contact
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router