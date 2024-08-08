import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AboutPage from '../components/AboutPage.vue'
import CharacterDetail from '../components/CharacterDetail.vue'
import LocationPage from '../components/LocationPage.vue'
import CharacterList from '../components/CharacterList.vue'
import EpisodesPage from '../components/EpisodesPage.vue'

const routes = [
  { path: '/about', component: AboutPage },
  { path: '/', component: HomePage },
  { path: '/character/:id', component: CharacterDetail, props: true },
  { path: '/location', component: LocationPage, props: true },
  { path: '/episode', component: EpisodesPage, props: true },
  { path: '/characters', component: CharacterList },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
