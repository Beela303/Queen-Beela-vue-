import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WritingView from '@/views/WritingView.vue'
import PodcastView from '@/views/PodcastView.vue'
import WorkView from '@/views/WorkView.vue'
import WorkArtView from '@/backup/WorkArtView.vue'
import WorkWebDevView from '@/backup/WorkWebDevView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import GalleryView from '@/views/GalleryView.vue'
import SocialsView from '@/views/SocialsView.vue'
import WritingPodcastView from '@/views/WritingPodcastView.vue'
import WorkExpView from '@/views/WorkExpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/writingandpodcast',
      name: 'Writing & Podcast',
      component: WritingPodcastView,
    },
    {
      path: '/writing',
      name: 'writing',
      component: WritingView,
      //meta: { index: 0 }
    },
    {
      path: '/podcast',
      name: 'podcast',
      component: PodcastView,
      //meta: { index: 1 }
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView,
    },
    {
      path: '/workexp',
      name: 'work and experience',
      component: WorkExpView,
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView,
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
