import ViewCategories from '../pages/ViewCategories.vue';
import ChangeCategory from '../pages/ChangeCategory.vue';
import AddCategory from '../pages/AddCategory.vue';
import ViewPosts from '../pages/ViewPosts.vue';
import ChangePost from '../pages/ChangePost.vue';
import AddPost from '../pages/AddPost.vue';

import Authorization from '../pages/Authorization.vue';
import ViewUsers from '../pages/ViewUsers.vue';
import ChangeUser from '../pages/ChangeUser.vue';
import AddUser from '../pages/AddUser.vue';

export const routes = [
    {
    path: '/admin/authorization',
    name: 'Authorization',
    component: Authorization,
    // beforeEnter: checkAuth
  },
  {
    path: '/view-users',
    name: 'ViewUsers',
    component: ViewUsers,
    // beforeEnter: checkAuth
  },
  {
    path: '/change-user/:id',
    name: 'ChangeUser',
    component: ChangeUser,
    props:true
    // beforeEnter: checkAuth
  },
  {
    path: '/add-user',
    name: 'AddUser',
    component: AddUser,
    // beforeEnter: checkAuth
  },
  {
    path: '/admin',
    name: 'ViewCategories',
    component: ViewCategories,
    // beforeEnter: checkAuth
  },
  {
    path: '/admin/change-category/:id',
    name: 'ChangeCategory',
    component: ChangeCategory,
    props: true,
    // beforeEnter: checkAuth
  },
  {
    path: '/admin/add-category',
    name: 'AddCategory',
    component: AddCategory,
    // beforeEnter: checkAuth
  },
  {
    path: '/admin/view-posts',
    name: 'ViewPosts',
    component: ViewPosts,
    // beforeEnter: checkAuth
  },
  {
    path: '/admin/change-post/:id',
    name: 'ChangePost',
    component: ChangePost,
    props: true,
    // beforeEnter: checkAuth
  },
  {
    path: '/admin/add-post',
    name: 'AddPost',
    component: AddPost,
    // beforeEnter: checkAuth
  }
]

