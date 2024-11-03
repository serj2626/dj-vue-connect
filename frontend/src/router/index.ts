import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Home.vue'),
    },

    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/pages/Signup.vue'),
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/Login.vue'),
    },
    {
      path: '/feed',
      name: 'feed',
      component: () => import('@/pages/Feed.vue'),
    },
    {
      path: '/messages',
      name: 'messages',
      component: () => import('@/pages/Messages.vue'),
    },
    {
      path: '/post/:id',
      name: 'post',
      component: () => import('@/pages/PostDetail.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/pages/Search.vue'),
    },
    {
      path: '/chat/list',
      name: 'chatList',
      component: () => import('@/pages/Chat.vue'),
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: () => import('@/pages/Profile.vue'),
    },
    {
      path: '/profile/:id/friends',
      name: 'friends',
      component: () => import('@/pages/Friends.vue'),
    },
    {
      path: '/profile/:id/subscribers',
      name: 'subscribers',
      component: () => import('@/pages/Subscribers.vue'),
    },
    {
      path: '/profile/:id/subscriptions',
      name: 'subscriptions',
      component: () => import('@/pages/Subscriptions.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/About.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'page-not-found',
      component: () => import('@/pages/PageNotFound.vue'),
    },
  ],
})

export default router
