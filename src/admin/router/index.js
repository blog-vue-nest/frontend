import ViewCategories from '../pages/ViewCategories.vue';
import ChangeCategory from '../pages/ChangeCategory.vue';
import AddCategory from '../pages/AddCategory.vue';
import ViewPosts from '../pages/ViewPosts.vue';
import ChangePost from '../pages/ChangePost.vue';
import AddPost from '../pages/AddPost.vue';

export const routes = [
  {
    path: '/admin/view-categories',
    name: 'ViewCategories',
    component: ViewCategories
  },
  {
    path: '/admin/change-category/:id',
    name: 'ChangeCategory',
    component: ChangeCategory,
    props: true
  },
  {
    path: '/admin/add-category',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/view-posts',
    name: 'ViewPosts',
    component: ViewPosts
  },
  {
    path: '/admin/change-post/:id',
    name: 'ChangePost',
    component: ChangePost,
    props: true
  },
  {
    path: '/admin/add-post',
    name: 'AddPost',
    component: AddPost
  }
]