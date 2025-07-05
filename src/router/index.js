import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogsView from '@/views/BlogsView.vue'
import PodcastView from '@/views/PodcastView.vue'
import WorkView from '@/views/WorkView.vue'
import WorkArtView from '@/views/WorkArtView.vue'
import WorkWebDevView from '@/views/WorkWebDevView.vue'
import GalleryView from '@/views/GalleryView.vue'
import SocialsView from '@/views/SocialsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogsView,
    },
    //{
    //path: '/blogs',
    //name: 'blogs',
    // route level code-splitting
    // this generates a separate chunk (blogs.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import('../views/BlogsView.vue'),
    //},
    {
      path: '/podcast',
      name: 'podcast',
      component: PodcastView,
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView,
    },
    {
      path: '/work/art',
      name: 'work-art',
      component: WorkArtView,
    },
    {
      path: '/work/webdev',
      name: 'work-webdev',
      component: WorkWebDevView,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView,
    },
    {
      path: '/socials',
      name: 'socials',
      component: SocialsView,
    },
  ],
})

export default router
