import Vue from 'vue';
import Router from 'vue-router';
import BlogPost from './components/Blog/BlogPost.vue';
import Blog from './views/Blog.vue';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dist/index.html',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blog/post/:id',
      name: 'blog-post',
      component: BlogPost,
      props: true
    }
  ]
});
